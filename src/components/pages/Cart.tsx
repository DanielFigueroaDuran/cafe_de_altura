//import { React, useState, useContext } from 'react'
//import { CoffeContext } from '../context/Context';
//import Copyright from "../CopyRight";
//import TotalCar from '../TotalCar';
//import CartItem from '../CartItem';
//import TotalCart from '../TotalCart';
import { useCoffe } from '../../context/useCoffe';
import CartItem from '../CartItem';
import TotalCart from '../TotalCart';


const Cart = () => {
    const { cart, setSelected } = useCoffe();
    const itemsQuantity = cart.reduce((acc, coffe) => acc + coffe.quantity, 0);

    return (
        <>
            {
                cart.length > 0
                    ? <div className='flex flex-col items-center p-4 lg:p-10 min-h-screen'>
                        <div className="flex justify-center pt-20 py-10 px-6">
                            <h2 className='font-medium text-2xl leading-7 text-[#2A5B45]'>Cesta({itemsQuantity})</h2>
                        </div>
                        <div className="lg:flex w-full">
                            <div className="flex border-2 border-amber-400">
                                <div className="flex flex-col items-start p-2">
                                    <h3 className="font-semibold text-lg leading-6 text-[#000000]">Productos</h3>
                                    <div className="flex justify-between py-4 gap-2 border-2 w-90  md:w-[90%] lg:w-full ">

                                        {/* ---------------------------Pintando Los productos seleccionados --------------*/}
                                        <div className='flex flex-col gap-5 w-full p-2  '>
                                            {cart.map((product) => <CartItem product={product} key={product.id} />)}
                                        </div>
                                    </div>
                                    <h3 className=" font-semibold text-lg leading-6 text-[#000000] py-10 ">Seleccionar envío</h3>
                                    <div className="flex justify-between items-baseline gap-4 w-full py-[10px] px-1 border-2 border-green-950">
                                        <div className="md:w-[90%] lg:w-full justify-between items-center flex gap-10 border-2 border-red-950">
                                            <div className='flex gap-3 items-center'>
                                                <input className="w-6 h-6 bg-[#2A5B45] border-none accent-[#2a5b45]"
                                                    type="radio"
                                                    name='send'
                                                    value="free"
                                                    defaultChecked
                                                    onChange={(e) => setSelected(e.target.value)} />

                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[#000000] text-sm font-semibold leading-4 ">Envío 5-7 días</p>
                                                    <p className="text-[#000000] font-semibold text-sm leading-4">
                                                        Opción estándar sin seguimiento
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-[#000000]">
                                                <h3 className="font-semibold text-lg leading-6">GRATIS</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full border border-[#e3ded7]"></div>
                                    <div className="flex justify-between  items-baseline gap-4 w-[776px] py-[10px] px-1 border-2 border-red-600">
                                        <div className="flex gap-4">
                                            <div className='flex items-center'>
                                                <input className="w-6 h-6 bg-[#2A5B45] border-none accent-[#2a5b45]"
                                                    type="radio"
                                                    name='send'
                                                    value="urgent"
                                                    onChange={(e) => setSelected(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 ">
                                                <p className="text-[#000000] font-semibold text-sm leading-4">
                                                    Envío urgente 24h
                                                </p>
                                                <p className="font-normal text-sm leading-4 text-[#000000]">
                                                    Recibe tu pedido en las siguientes 24h (Para pedidos
                                                    realizados antes de las 13:00).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-[54px] h-6">
                                            <h3 className="text-[#000000]">9,00€</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ----------------total de carrito --> */}
                            <TotalCart
                                label={"Ir a checkout"}
                                route={"/checkout"}
                                text={"Seguir comprando"}
                            />
                        </div>
                    </div>
                    : (
                        <div className='flex justify-center min-h-screen items-center'>
                            <h2>Your cart is empty</h2>
                        </div>
                    )
            }
        </>
    )
};

export default Cart