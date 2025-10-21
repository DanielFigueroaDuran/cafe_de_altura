import { Link } from 'react-router-dom';
import Phone from "../../assets/icon/Icont.png";
import Mail from "../../assets/icon/Mail.png";
import UserForm from '../UserForm';

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 bg-[#e3ded7] opacity-90 z-0">
            <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col justify-start gap-2 ">
                    <h3 className='mt-10 font-semibold text-lg leading-6 text-center md:text-left text-[#111827]'>Entra en contacto con nosotros</h3>
                    <p className='font-normal text-sm leading-4 text-[#6b7280]'>Si tienes dudas, ponte en contacto con nosotros a    través del formulario y te responderemos lo antes   posible.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <p className='font-normal text-sm leading-4 text-[#6b7280]'>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                    <address>
                        <p className='font-normal text-sm leading-4 text-[#6b7280]'>
                            742 Evergreen Terrace
                        </p>
                        <p className='font-normal text-sm leading-4 text-[#6b7280]'>
                            Springfield, OR 12345
                        </p>
                    </address>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                            <img src={Phone} alt="Phone" />
                            <p className="font-normal text-sm leading-4 text-[#6b7280]">+1 (555) 123-4567</p>
                        </div>
                        <div className="email">
                            <div className="flex gap-4 items-center">
                                <img src={Mail} alt="Mail" />
                                <p className='font-normal text-sm leading-4 text-[#6b7280]'>support@example.com</p>
                            </div>
                        </div>
                    </div>
                    <p className='font-normal text-sm leading-4 text-[#6b7280]'>
                        ¿Buscas un trabajo?
                        <Link to={'#'} className='font-semibold text-sm leading-4 text-[#111827] underline'>
                            Ver nuestras ofertas.
                        </Link>
                    </p>
                </div>
            </div>
            {/* <!------------------- Formulario----------------- --> */}
            <UserForm />
        </div>
    )
}

export default Contact 