import { useContext, useEffect, useState } from 'react'
import Arrow from "../assets/icon/Arrow.png";
import Show from './Show';
import { CoffeContext } from "./context/Context";
import Button from './Button';

const SectionCoffeTienda = () => {
    const { products, handleClick } = useContext(CoffeContext);

    return (
        <>
            <div className="flex flex-col pt-24 p-4 gap-10">
                <h2 className="flex  justify-center text-[rgb(42,91,69)] font-medium text-xl leading-7 ">Últimos orígenes</h2>
                <div className="grid grid-rows-2 grid-flow-col justify-center gap-6 p-6">
                    {products?.map((product, i) => {
                        return (
                            <div key={product._id}>
                                {product.brand === 'Colombia La Casita'
                                    ? <div className='flex p-6  border border-gray-light rounded-lg
                            transition-all duration-300 bg-[#F7F5F3]'
                                    >
                                        <div className='flex flex-col items-center gap-6 '>
                                            <img className='' src={product.img_url} alt="coffe" />
                                            <div className='flex flex-col items-center gap-3'>
                                                <p className='font-semibold text-sm leading-4 text-slate-950 '>
                                                    {product.brand}
                                                </p>
                                                <p className='flex text-slate-950'>{product.price.toFixed(2).toString().replace(/\./g, ',')} €</p>
                                            </div>
                                            <Button
                                                className={'bg-[#DD2654] rounded-sm p-2 border-none   text-[#fff] '}
                                                label={'Agotado'}
                                            />
                                        </div>
                                    </div>
                                    : <div className='flex p-6  border border-gray-light rounded-lg
                            transition-all duration-300 hover:bg-[#e3ded7]'
                                        key={product._id}>
                                        <div className='flex flex-col items-center gap-6'>
                                            <img className='' src={product.img_url} alt="coffe" />
                                            <div className='flex flex-col items-center gap-3'>
                                                <p className='font-semibold text-sm leading-4 text-slate-950 '>
                                                    {product.brand}
                                                </p>
                                                <p className='flex text-slate-950'>{product.price.toFixed(2).toString().replace(/\./g, ',')} €</p>
                                            </div>
                                            <Button
                                                className={'bg-[#2a5b45b2] rounded-sm p-2 border-none  hover:bg-[#2a5b45] text-[#fff] '}
                                                label={'Añadir'}
                                                handleClick={() => handleClick(product)}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SectionCoffeTienda