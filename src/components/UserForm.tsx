import { useEffect, useState } from 'react'
import { getlocalStorageForm } from "../utils/utils.js";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UserForm = () => {

    const [userForm, setUserForm] = useState(getlocalStorageForm());
    const { register, handleSubmit, trigger, reset,
        formState: { errors }
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        setUserForm(data);
        reset();
    });

    useEffect(() => {
        localStorage.setItem("dataForm", JSON.stringify(userForm));
    }, [userForm]);

    return (
        <form className='bg-[#fff] py-8 px-12'
            onSubmit={onSubmit}
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <label
                        className='font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                        htmlFor="username"
                    >
                        Nombre Completo
                    </label>
                    <input
                        className='w-full h-[34px] border border-[#d1d5db] rounded-md
                         bg-[#fff] text-[#374151] py-[9px] px-[13px] hover:border-[#9b9ea3] focus:outline-[#3f8f6b]'
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Nombre Completo"
                        {...register("userName", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            },
                            minLength: {
                                value: 2,
                                message: "Nombre debe tener minimo 2 caracteres"
                            },
                            maxLength: {
                                value: 20,
                                message: "Nombre debe tener máximo 20 caracteres"
                            },
                        })}
                        onBlur={() => trigger("userName")}
                    />
                    {
                        errors.userName && <span className='block text-[tomato] text-sm '>{errors.userName.message}</span>
                    }
                </div>

                <div className="flex flex-col gap-1">
                    <label
                        className='font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className='w-full h-[34px] border border-[#d1d5db] rounded-md
                        bg-[#fff] text-[#374151] py-[9px] px-[13px] hover:border-[#9b9ea3] focus:outline-[#3f8f6b]'
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            },
                            pattern: {
                                value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                message: "Correo no válido"
                            },
                        })}
                        onBlur={() => trigger("email")}
                    />
                    {errors.email && <span className='block text-[tomato] text-sm' >{errors.email.message}</span>}
                </div>
                <div>
                    <label
                        className='font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                        htmlFor="phone"
                    >
                        Teléfono
                    </label>
                    <div className="flex h-[34px] border border-[#d1d5db] rounded-md
                        bg-[#fff] text-[#374151] py-[9px] px-[13px] hover:border-[#9b9ea3] focus:outline-[#3f8f6b]">
                        <select
                            className='border-none rounded-none
                         hover:border-[#9b9ea3]   
                            focus:outline-none font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                            name="country"
                            id="country"
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: "Campo requerido"
                                },
                            }
                            )}
                            onBlur={() => trigger("country")}

                            defaultValue=""
                        >
                            <option className="text-[#000000]" value="">-</option>
                            <option className="text-[#000000]" value="us">US</option>
                            <option className="text-[#000000]" value="es">ES</option>
                            <option className="text-[#000000]" value="otro">Otro</option>
                        </select>
                        <input
                            className='w-[100%] border-none focus:outline-none '
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 987-6543"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Campo requerido"
                                },
                            })}
                            onBlur={() => trigger("phone")}
                        />
                    </div>
                    <div className='flex gap-4'>
                        {errors.country && <span className='block text-[tomato] text-sm '>{errors.country.message}</span>}
                        {errors.phone && <span className='block text-[tomato] text-sm '>{errors.phone.message}</span>}
                    </div>
                </div>
                <textarea
                    className='border border-[#d1d5db] rounded-md pt-3 pr-[277px] pb-[93px] pl-[17px] 
                    hover:border-[#9b9ea3] focus:outline-[#3f8f6b]'
                    name="textMessage"
                    id="textMessage"
                    cols="30"
                    rows="5"
                    placeholder="¿En qué podemos ayudarte?"
                    {...register("textMessage", {
                        required: {
                            value: true,
                            message: "Campo requerido"
                        },
                    })}
                    onBlur={() => trigger("textMessage")}
                >
                </textarea>

                {errors.textMessage && <span className='block text-[tomato] text-sm '>{errors.textMessage.message}</span>}

                <div className="flex items-center gap-3 text-[#374151]">
                    <input
                        className='border-none cursor-pointer w-4 h-4 accent-[#2a5b45]'
                        type="checkbox"
                        id="terms"
                        name="terms"
                        {...register("terms", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            },
                        })}
                        onBlur={() => trigger("terms")}
                    />
                    <label
                        className='font-normal text-xs leading-4 text-[#374151] cursor-pointer'
                        htmlFor="terminos">
                        <p className='font-normal text-sm leading-4'>
                            Acepto la <Link to={'#'} className='underline text-[#374151]'>
                                Política de privacidad
                            </Link>
                            y los
                            <Link to={'#'} className='underline'>
                                Términos y condiciones.
                            </Link>
                        </p>
                    </label>
                </div>
                {errors.terms && <span className='block text-[tomato] text-sm '>{errors.terms.message}</span>}
                <input
                    className="w-[90px] h-10 text-sm font-semibold bg-[#2a5b45b2] text-[#ffffff]  px-6 rounded-[4px] cursor-pointer hover:bg-[#2a5b45]"
                    type="submit"
                    value="Enviar"
                />
            </div>
        </form>
    )
}

export default UserForm