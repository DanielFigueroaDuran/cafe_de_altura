import React from 'react'
import { Link } from 'react-router-dom';
import Coffe from "../assets/icon/coffee.png";
import Phone from "../assets/icon/Phone.png";
import Email from "../assets/icon/email2.png";
import ButtonContact from './ButtonContact';
import NavLink from './NavLink';
import Logo from './Logo';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1f1815] pt-[28.61px] pb-[37.73px] px-10">
                <div className="flex flex-col gap-4  text-[#fff]">
                    <Logo />
                    <div className="flex gap-[321.67px]">
                        <div className="flex flex-col items-start gap-4">
                            <h3 className='font-semibold text-lg leading-6'>Te ayudamos en</h3>
                            <div className="flex flex-col gap-4">
                                <Link>
                                    <ButtonContact
                                        className={'w-[182px] flex  bg-[#515051]  rounded-[4px] py-3 px-6 font-semibold text-sm leading-4 cursor-pointer ease-in duration-300 hover:bg-[#616363] items-center '}
                                        classContainer={'w-[134px] flex items-center gap-2'}
                                        img={Phone}
                                        paragraph={'+34 919 49 05 18'}
                                    />
                                </Link>
                                <Link>
                                    <ButtonContact
                                        className={'w-[232px] flex gap-2 bg-[#515051]  rounded-[4px] py-3 px-6 font-semibold text-sm leading-4 cursor-pointer ease-in duration-300 hover:bg-[#616363] items-center'}
                                        classContainer={'flex items-center'}
                                        img={Email}
                                        paragraph={'hola@cafedealtura.com'}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='flex gap-40'>
                            <NavLink direction={"flex-col"} />
                            <div className="p-4">
                                <ul className="flex flex-col items-start gap-4 font-semibold text-sm leading-4">
                                    <Link to={'#'} ><h4>Política de privacidad</h4></Link>
                                    <Link to={'#'} ><h4>Política de cookies</h4></Link>
                                    <Link to={'#'} ><h4>Términos y condiciones</h4></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright />
        </>
    )
}

export default Footer