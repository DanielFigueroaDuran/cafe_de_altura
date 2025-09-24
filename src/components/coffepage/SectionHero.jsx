import React from 'react'
import coffeePlant from "../assets/img/coffeePlant.png";
import Button from "./Button";
import { Link } from 'react-router-dom';

const SectionHero = () => {
    return (
        <section className='flex justify-center pt-24 pb-12  px-10 gap-2 '>
            <div className="flex justify-center items-center gap-6">
                <div className="flex flex-col items-start gap-4 w-[588px] ">
                    <h3 className="font-semibold text-[18px] leading-6 text-[#2a5b45]">De la planta a tu taza</h3>
                    <h1 className='font-semibold text-[38px] leading-10 text-[#000000]'>El mejor café del mundo, ahora en tu casa.</h1>
                    <p className="font-normal text-sm leading-4 text-[#111827] ">
                        Trabajamos con agricultores de todo el mundo para seleccionar los
                        mejores granos de café y
                        que puedas viajar desde la comodidad de tu
                        hogar.
                    </p>
                    <div className="flex gap-4">
                        <Link to={'https://www.bonka.es/amor-por-el-cafe/origen-del-cafe#:~:text=La%20historia%20del%20caf%C3%A9%20empieza,a%20consumir%20granos%20de%20caf%C3%A9.'}>
                            <p className='bg-[#1f1815] text-[#fff] py-3 px-6 rounded'>
                                Descubrir orígenes
                            </p>
                        </Link>
                        <Link to={'/tienda'}>
                            <p className='bg-[#2a5b45] text-[#fff] py-3 px-6 rounded'>
                                Comprar Café
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex items-stretch w-[588px]  rounded-[20px] bg-contain bg-no-repeat">
                    <img src={coffeePlant} alt="coffeePlant" />
                </div>
            </div>
        </section>
    )
}

export default SectionHero