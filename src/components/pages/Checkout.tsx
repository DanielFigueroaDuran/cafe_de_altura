import { useState } from 'react'

import { useForm } from 'react-hook-form';
//import { DevTool } from "@hookform/devtools";
import heroicons from "../../assets/icon/heroicons.png";

//import Copyright from '../CopyRight'
import bizumImg from "../../assets/icon/bizum.png";
import TotalCart from '../TotalCart';
import { useCoffe } from '../../context/useCoffe';


const Checkout = () => {
    const { cart, setCart, setProductSelected, setTotalSummry, total } = useCoffe();
    const [isOption, setIsOption] = useState(false);
    const { register, handleSubmit, trigger, reset,
        formState: { errors }
    } = useForm();

    const formSubmit = () => {
        reset();
    };

    const handleonClick = () => {
        setProductSelected(cart);
        setTotalSummry(total);
        setCart([]);
        localStorage.clear();
    }

    return (
        <>
            <div className='flex flex-col items-center gap-6 p-10 min-h-screen'>
                <h2 className='font-medium text-2xl leading-7 text-center text-[#2a5b45]'>Checkout</h2>
                <form className='flex gap-6'
                    onSubmit={handleSubmit(formSubmit)}
                    noValidate
                >
                    <div className=' flex flex-col p-2 gap-6'  >
                        <h3 className='font-semibold text-lg leading-6'>Seleccionar método de pago</h3>

                        {/* ----------------Section DebitCard------------------------- */}

                        <div className='flex gap-4'>
                            <div className='flex items-center'>
                                <input className="w-6 h-6 bg-[#2A5B45] border-none accent-[#2a5b45]"
                                    type="radio"
                                    name='send'
                                    value="debitCard"
                                    // checked={option === 'debitCard'}
                                    onChange={() => setIsOption('debitCard')}
                                />
                            </div>
                            <div className='flex justify-between w-[665px]'>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-sm leading-4'>Tarjeta de débito</p>
                                    <p className='font-normal text-sm leading-4'>Opción estándar sin seguimiento</p>
                                </div>
                            </div>
                        </div>
                        {
                            isOption === 'debitCard' && (
                                <div>
                                    <div className='flex flex-col gap-2 w-[279px]'>
                                        <div className='flex flex-col '>
                                            <label
                                                htmlFor="accountHolder"
                                                placeholder=''
                                            >
                                                <p className='text-[#000000] font-normal text-xs leading-4' >Titular</p>
                                            </label>
                                            <input
                                                className='py-2 px-2 w-full h-[34px] border border-[#d1d5db] rounded-md
                                             bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b]  font-normal text-xs leading-4'
                                                type="text"
                                                id="accountHolde"
                                                placeholder='Nombre del titular'
                                                {...register("accountHolde", {
                                                    required: {
                                                        value: true,
                                                        message: "Campo requerido",
                                                    }
                                                })}
                                                onBlur={() => trigger("accountHolde")}
                                            />
                                        </div>

                                        {<span className='block text-[tomato] text-sm ' >{errors.accountHolde?.message}</span>}

                                        <div className='flex flex-col'>
                                            <label className='text-[#000000] font-normal text-xs leading-4'
                                                htmlFor="cardNumber"
                                            >
                                                Número de la tarjeta
                                            </label>
                                            <input
                                                className='py-2 px-2 w-full h-[34px] border border-[#d1d5db] rounded-md
                                                 bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b]  font-normal text-xs leading-4'
                                                type="text"
                                                id="cardNumber"
                                                placeholder='Número de la tarjeta'
                                                {...register("cardNumber", {
                                                    required: {
                                                        value: true,
                                                        message: "Campo requerido",
                                                    }
                                                })}
                                                onBlur={() => trigger("cardNumber")}
                                            />
                                        </div>

                                        {<span className='block text-[tomato] text-sm ' >{errors.cardNumber?.message}</span>}

                                        <div className="flex gap-6">
                                            <div>
                                                <label
                                                    htmlFor="expirationDate">
                                                    <p className='text-[#000000] font-normal text-xs leading-4' > Fecha de caducidad </p>
                                                </label>
                                                <input
                                                    className='py-2 px-2 w-full h-[34px] border border-[#d1d5db] rounded-md
                                                         bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] 
                                                         focus:outline-[#3f8f6b] font-normal text-xs leading-4'
                                                    type="text"
                                                    id="expirationDate"
                                                    placeholder='MM / YY'
                                                    {...register("expirationDate", {
                                                        required: {
                                                            value: true,
                                                            message: "Campo requerido",
                                                        }
                                                    })}
                                                    onBlur={() => trigger("expirationDate")}
                                                />
                                                {<span className='block text-[tomato] text-sm ' >{errors.expirationDate?.message}</span>}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="cvc">
                                                    <p className='text-[#000000] font-normal text-xs leading-4' >CVC</p>
                                                </label>
                                                <input
                                                    className='py-2 px-2 w-full h-[34px] border border-[#d1d5db] rounded-md
                                                   bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] font-normal text-xs leading-4'
                                                    type="text"
                                                    id="cvc"
                                                    placeholder='123'
                                                    {...register("cvc", {
                                                        required: {
                                                            value: true,
                                                            message: "Campo requerido",
                                                        }
                                                    })}
                                                    onBlur={() => trigger("cvc")}
                                                />
                                                {<span className='block text-[tomato] text-sm ' >{errors.cvc?.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="w-[776px] border border-[#e3ded7]"></div>

                        {/* ---------------------------------Section Bank Transfer------------------------------------ */}
                        <div className='flex gap-4'>
                            <div className='flex items-center'>
                                <input className="w-6 h-6 bg-[#2A5B45] border-none accent-[#2a5b45]"
                                    type="radio"
                                    name='send'
                                    value="bankTransfer"
                                    //  checked={option === 'bankTransfer'}
                                    onChange={() => { setIsOption('bankTransfer') }}
                                />
                            </div>
                            <div className='flex justify-between w-[665px]'>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-sm leading-4'>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                                    {/* <p className='font-normal text-sm leading-4'>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p> */}
                                </div>
                            </div>
                        </div>
                        {isOption === "bankTransfer" && (
                            <div className='px-10'>
                                <p className='text-[#000000] font-normal text-xs leading-4'>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                            </div>
                        )
                        }
                        <div className="w-[776px] border border-[#e3ded7]"></div>

                        {/* ---------------------------------Section Bizum------------------------------------ */}

                        <div className='flex items-center gap-4'>
                            <div className='flex items-center'>
                                <input className="w-6 h-6 bg-[#2A5B45] border-none accent-[#2a5b45]"
                                    type="radio"
                                    name='send'
                                    value="bizum"
                                    onChange={() => { setIsOption('bizum') }}
                                />
                            </div>
                            <div>
                                <p className='font-semibold text-sm leading-4'>Bizum</p>
                            </div>
                            <div className='w-[69.231px] h-[30px]'>
                                <img src={bizumImg} alt="bizum" />
                            </div>
                        </div>
                        {
                            isOption === 'bizum' && (
                                <div className='px-10'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                                </div>
                            )
                        }
                        {/* ---------------------------------Section Address------------------------------------ */}

                        <h3 className='font-semibold text-lg leading-6'>Dirección de envío</h3>
                        <div className=' flex flex-col gap-2 w-[521px]'>
                            <div className='flex flex-col gap-2 '>
                                <label className='font-normal text-xs leading-4 text-[#515251]'
                                    htmlFor="firstName"
                                    placeholder='Nombre'
                                >
                                    <p className='text-[#000000] font-normal text-xs leading-4'>
                                        Nombre
                                    </p>
                                </label>
                                <input
                                    className='py-2 px-2 w-full h-[36px] border border-[#d1d5db] rounded-md
                                        bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] font-normal text-xs leading-4'
                                    type="text"
                                    id='firstName'
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Campo requerido",
                                        }
                                    })}
                                    onBlur={() => trigger("firstName")}
                                />
                            </div>

                            {<span className='block text-[tomato] text-sm ' >{errors.firstName?.message}</span>}

                            <div className='flex flex-col '>
                                <label className='font-normal text-xs leading-4'
                                    htmlFor="lastName"
                                >
                                    Apellidos
                                </label>
                                <input
                                    className='py-2 px-2 w-full h-[36px] border border-[#d1d5db] rounded-md
                                        bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] 
                                        focus:outline-[#3f8f6b] font-normal text-xs leading-4'
                                    type="text"
                                    id="lastName"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Campo requerido"
                                        }
                                    })}
                                    onBlur={() => trigger("lastName")}
                                />
                            </div>

                            {<span className='block text-[tomato] text-sm ' >{errors.lastName?.message}</span>}
                            <div className='flex flex-col '>
                                <label className=' font-normal text-xs leading-4'
                                    htmlFor="phone"
                                >
                                    Teléfono
                                </label>
                                <input
                                    className='font-normal text-xs leading-4 text-[#515251] py-2 px-2 
                                        w-full h-[36px] border border-[#d1d5db] rounded-md
                                        bg-[#fff] hover:border-[#9b9ea3] focus:outline-[#3f8f6b]'
                                    type="text"
                                    id="phone"
                                    placeholder='+34 600 6000 600'
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Campo requerido"
                                        }
                                    })}
                                    onBlur={() => trigger("phone")}
                                />
                            </div>
                            {<span className='block text-[tomato] text-sm ' >{errors.phone?.message}</span>}
                            <div className='flex flex-col '>
                                <label className='font-normal text-xs leading-4'
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className='py-2 px-2 w-full h-[36px] border border-[#d1d5db] rounded-md
                                        bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b]
                                         font-normal text-xs leading-4'
                                    type="text"
                                    id="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Campo requerido"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Campo requerido"
                                        },
                                    })}
                                    onBlur={() => trigger("email")}
                                />
                            </div>
                            {<span className='block text-[tomato] text-sm ' >{errors.email?.message}</span>}
                            <div className="flex h-[34px] border border-[#d1d5db] rounded-md
                                     bg-[#fff] text-[#374151] py-[9px] px-[13px] hover:border-[#9b9ea3]  focus:outline-[#3f8f6b]">
                                <input
                                    className='font-normal text-xs leading-4 text-[#515251] w-[100%] border-none focus:outline-none '
                                    type="text"
                                    name="country"
                                    id="country"
                                    placeholder="Seleccionar"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: "Campo requerido"
                                        }
                                    })}
                                    onBlur={() => trigger("country")}
                                />
                                <div
                                    className='border-none rounded-none 
                                         hover:border-[#9b9ea3] focus:outline-none font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                                    name="country"
                                    id="country"
                                >
                                    <img src={heroicons} alt="heroicons" />
                                </div>
                            </div>

                            {<span className='block text-[tomato] text-sm ' >{errors.country?.message}</span>}

                            <div className="flex  gap-6">
                                <div className='w-[248.5px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Población</p>
                                    <input
                                        className='py-2 px-2 w-full h-[36px] border border-[#d1d5db] rounded-md
                                            bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] 
                                            font-normal text-xs leading-4'
                                        type="text"
                                        id="population"
                                        {...register("population", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("population")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.population?.message}</span>}
                                </div>
                                <div className='w-[248.5px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>CP</p>
                                    <input
                                        className='py-2 px-2 w-full h-[36px] border border-[#d1d5db] rounded-md
                                        bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b]
                                         font-normal text-xs leading-4'
                                        type="text"
                                        id="cp"
                                        {...register("cp", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("cp")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.cp?.message}</span>}
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='w-[112.25px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Calle</p>
                                    <input
                                        className='py-2 px-2 w-[112.25px]  h-[36px] border border-[#d1d5db] rounded-md
                                            bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] 
                                            font-normal text-xs leading-4'
                                        type="text"
                                        id="street"
                                        {...register("street", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("street")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.street?.message}</span>}
                                </div>
                                <div className='w-[112.25px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Nº</p>
                                    <input
                                        className='py-2 px-2 w-[112.25px]  h-[36px] border border-[#d1d5db] rounded-md
                                            bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] 
                                            font-normal text-xs leading-4'
                                        type="text"
                                        id="number"
                                        {...register("number", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("number")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.number?.message}</span>}
                                </div>
                                <div className='w-[112.25px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Piso</p>
                                    <input
                                        className='py-2 px-2 w-[112.25px]  h-[36px] border border-[#d1d5db] rounded-md
                                            bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] 
                                            font-normal text-xs leading-4'
                                        type="text"
                                        id="floor"
                                        {...register("floor", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("floor")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.floor?.message}</span>}
                                </div>
                                <div className='w-[112.25px]'>
                                    <p className='text-[#000000] font-normal text-xs leading-4'>Puerta</p>
                                    <input
                                        className='py-2 px-2 w-[112.25px]  h-[36px] border border-[#d1d5db] rounded-md
                                            bg-[#fff] text-[#374151]  hover:border-[#9b9ea3] focus:outline-[#3f8f6b] 
                                            font-normal text-xs leading-4'
                                        type="text"
                                        id="door"
                                        {...register("door", {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            }
                                        })}
                                        onBlur={() => trigger("door")}
                                    />
                                    {<span className='block text-[tomato] text-sm ' >{errors.door?.message}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------------------TotalCart------------------------ */}
                    <TotalCart
                        label={"Pagar y realizar pedido"}
                        route={"/success"}
                        handleonClick={handleonClick}
                    />
                </form>
            </div>
            <Copyright />
        </>
    )
}

export default Checkout