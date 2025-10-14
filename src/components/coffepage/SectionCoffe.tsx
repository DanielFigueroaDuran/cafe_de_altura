//import { React, useContext, useState } from 'react'
//import Arrow from "../assets/icon/Arrow.png";
//import Show from './Show';
//import { CoffeContext } from "./context/Context";
//import Button from './Button';

import { useCoffe } from "../../context/useCoffe";


const SectionCoffe = () => {

    const { products } = useCoffe();

    console.log(products);

    return (
        <>
            <div className="flex flex-col p-4 gap-10 ">
                <h2 className="flex justify-center text-[rgb(42,91,69)] font-medium text-xl leading-7 ">Novedades</h2>
                <div className="flex justify-center gap-6 p-6 ">
                    {products?.slice(0, 4).map((product, i) => {
                        return (
                            <div className='flex p-6  border border-gray-light rounded-lg
                            transition-all duration-300   hover:bg-[#e3ded7]'
                                key={i}>
                                <div className='flex flex-col items-center gap-6'>
                                    <img className='' src={product.img_url} alt="coffe" />
                                    <div className='flex flex-col items-center gap-3'>
                                        <p className='font-semibold text-sm leading-4 text-slate-950 '>{product.brand}</p>
                                        <p className='flex text-slate-950'>{product.price.toFixed(2).toString().replace(/\./g, ',')} €</p>
                                    </div>
                                    {/* <Button
                                        className={'bg-[#2a5b45b2] rounded-sm p-2 border-none text-slate-50 hover:bg-[#2a5b45] text-[#fff]'}
                                        label={'Añadir'}
                                        handleClick={() => handleClick(product)}
                                    /> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <Show
                    className={'flex justify-center items-center gap-1 decoration-slate-950 underline'}
                    link={'Tienda'}
                    label={'Ver Todos'}
                    icon={Arrow}
                /> */}
            </div>
        </>
    )
}

export default SectionCoffe