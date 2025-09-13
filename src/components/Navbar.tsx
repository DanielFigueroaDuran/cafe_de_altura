import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoffeContext } from './context/Context';
import phone from "../assets/icon/Phone.png";
import lock from "../assets/icon/lock.png";
import Button from "./Button";
import NavLink from './NavLink';
import Logo from './Logo';

const Navbar = () => {
    const { cart, setCart } = useContext(CoffeContext);
    const itemsQuantity = cart.reduce((acc, coffe) => acc + coffe.quantity, 0);

    return (
        <>
            <header className='flex justify-between  items-center py-3 px-10  
                text-[#fff] bg-[#2b2a2b]  w-full fixed z-[1]' >
                <Logo />
                <NavLink />
                <div className='flex items-center gap-2 my-1 font-semibold text-sm leading-4'>
                    <div className='w-[18px] h-[18px] bg-bottom bg-cover bg-no-repeat '>
                        <img src={phone} alt="phone" />
                    </div>
                    <Link to={'#'}><p className='numero'>+34 919 49 05 18</p></Link>
                    <Button label={"Iniciar sesión"} className={"bg-[#515051] py-3 px-6 rounded-[4px] font-semibold text-sm leading-4 cursor-pointer ease-in duration-300 hover:bg-[#616363]"} />
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
                </div>
            </header>

        </>
    )
}

export default Navbar