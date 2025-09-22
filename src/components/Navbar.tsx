import { useCoffe } from '../utils/useCoffe';
import { IoCloseSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import phone from "../assets/icon/Phone.png";
import lock from "../assets/icon/lock.png";
import Logo from './Logo';
import NavLink from './NavLink';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { cart } = useCoffe();

    const itemsQuantity = cart.reduce((acc, coffe) => acc + coffe.quantity, 0);

    console.log(itemsQuantity);

    //   <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="flex justify-between h-16 items-center">
    //                     {/* Logo */}
    //                     <div className="text-xl font-bold text-gray-800">
    //                         <Link to="/">☕ Coffee Shop</Link>
    //                     </div>

    //                     {/* Botón hamburguesa (solo en mobile) */}
    //                     <div className="lg:hidden">
    //                         <button
    //                             onClick={() => setIsOpen(!isOpen)}
    //                             className="text-gray-800 focus:outline-none"
    //                         >
    //                             {isOpen ? "✖" : "☰"}
    //                         </button>
    //                     </div>

    //                     {/* Links grandes (desktop) */}
    //                     <div className="hidden lg:flex space-x-6">
    //                         <Link to="/" className="hover:text-brown-600">Inicio</Link>
    //                         <Link to="/menu" className="hover:text-brown-600">Menú</Link>
    //                         <Link to="/about" className="hover:text-brown-600">Nosotros</Link>
    //                         <Link to="/contact" className="hover:text-brown-600">Contacto</Link>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Menu móvil */}
    //             {isOpen && (
    //                 <div className="lg:hidden bg-white shadow-md">
    //                     <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Inicio</Link>
    //                     <Link to="/menu" className="block px-4 py-2 hover:bg-gray-100">Menú</Link>
    //                     <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">Nosotros</Link>
    //                     <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contacto</Link>
    //                 </div>
    //             )}
    //         </nav>

    return (
        <>
            <header className='bg-[#2b2a2b] shadow-md fixed w-full top-0 left-0 z-50 py-3 px-10' >
                <div className='flex justify-between  items-center  
                text-[#fff]'>
                    <Logo />
                    {/* Botón hamburguesa (solo en mobile) */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <IoCloseSharp /> : <HiMenu />}
                        </button>
                    </div>
                </div>




                {/* <div className='flex items-center gap-2 my-1 font-semibold text-sm leading-4'>
                    <div className='w-[18px] h-[18px] bg-bottom bg-cover bg-no-repeat '>
                        <img src={phone} alt="phone" />
                    </div>
                    <Link to={'#'}><p className='numero'>+34 919 49 05 18</p></Link>
                    <Button
                        label={"Iniciar sesión"}
                        className={"bg-[#515051] py-3 px-6 rounded-[4px] font-semibold text-sm leading-4 cursor-pointer ease-in duration-300 hover:bg-[#616363]"} />
                </div>
                <div>
                    <Link to={'/cesta'}>
                        <div className='flex  justify-center  gap-2 w-[56px] h-[24px] bg-bottom bg-cover bg-no-repeat'>
                            <img className='w-[17.665px] h-[20px]' src={lock} alt="lock" />
                            <div className={`${cart.length > 0
                                ? 'flex justify-center w-6 h-6 bg-[#f7f5f31a] rounded-[200px]'
                                : 'flex justify-center w-6 h-6'}`}
                            >
                                {cart.length > 0
                                    ? itemsQuantity
                                    : null
                                }
                            </div>
                        </div>
                    </Link>
                </div> */}

                {isOpen && (
                    <div className="lg:hidden">

                    </div>
                )

                }
            </header>
        </>
    )
}

export default Navbar