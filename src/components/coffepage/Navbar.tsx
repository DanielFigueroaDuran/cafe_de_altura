import { IoCloseSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import phone from "../../assets/icon/Phone.png";
import lock from "../../assets/icon/lock.png";
import Logo from '../Logo';
import NavLink from '../NavLink';
import Button from '../Button';
import { useState } from 'react';
import { useCoffe } from "../../context/useCoffe";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { cart } = useCoffe();

    const itemsQuantity = cart.reduce((acc, coffe) => acc + coffe.quantity, 0);

    return (
        <>
            <header className='bg-[#2b2a2b] shadow-md fixed w-full top-0 left-0 z-50 py-3 px-2 lg:px-10' >
                <div className='flex justify-between  items-center text-[#fff]'>
                    <Logo />
                    {/* Links grandes (desktop) */}
                    <div className="hidden lg:flex justify-end gap-4 font-semibold text-sm p-2 leading-4">
                        <NavLink />
                    </div>
                    <div className='hidden lg:flex items-center gap-2 my-1 font-semibold text-sm leading-4'>
                        <div className='w-[18px] h-[18px] bg-bottom bg-cover bg-no-repeat '>
                            <img src={phone} alt="phone" />
                        </div>
                        <Link to={'#'}><p className='numero'>+34 919 49 05 18</p></Link>
                        <Button
                            label={"Iniciar sesión"}
                            className={"bg-[#515051] py-3 px-6 rounded-[4px] font-semibold text-sm leading-4 cursor-pointer ease-in duration-300 hover:bg-[#616363]"} />
                    </div>

                    <div className='flex gap-2'>
                        {/* Botón hamburguesa (solo en mobile) */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white focus:outline-none"
                            >
                                {isOpen ? <IoCloseSharp /> : <HiMenu />}
                            </button>
                        </div>

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
                    </div>
                </div>

                {/* Menu móvil */}
                {isOpen && (
                    <div className="lg:hidden mt-2 bg-[#2b2a2b] text-white shadow-md">
                        <Link to="/tienda" className="block px-4 py-2 hover:bg-[#f7f5f31a]">Tienda</Link>
                        <Link to="#" className="block px-4 py-2 hover:bg-[#f7f5f31a]">Suscripción</Link>
                        <Link to="#" className="block px-4 py-2 hover:bg-[#f7f5f31a]">Para Empresas</Link>
                        <Link to="#" className="block px-4 py-2 hover:bg-[#f7f5f31a]">Sobre nosotros</Link>
                        <Link to="#" className="block px-4 py-2 hover:bg-[#f7f5f31a]">Contacto</Link>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar