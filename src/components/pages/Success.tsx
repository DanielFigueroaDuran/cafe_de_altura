import { Link } from 'react-router-dom';
import receive from "../../assets/icon/Illustration.png";
import { useCoffe } from '../../context/useCoffe';

const Success = () => {
    const { productSelected, selected, totalSummry, total } = useCoffe();
    const vat = 0.21;
    const totalVat = totalSummry * vat;

    return (
        <div className='flex flex-col gap-6 items-center pt-24 p-10'>
            <div className='w-[40px] h-[40px]' >
                <img src={receive} alt="receive" />
            </div>
            <h2 className='font-medium text-2xl leading-7 text-[#2A5B45]'>El pedido ha sido realizado con éxito
            </h2>
            <div className='flex items-center  w-[346px] h-[48px]'>
                <p className='font-normal text-sm leading-4 text-center text-[#000000'>
                    El pedido #12387 se encuentra en preparación.
                    Lo recibirás dentro de las fechas acordadas en tu envío.
                    Hemos enviado un ticket a tu correo electrónico.
                </p>
            </div>
            <div className='flex flex-col gap-6 p-6  bg-[#F7F5F3] rounded-[10px] w-full'>
                <h3 className='font-semibold text-lg leading-6 text-[#000000]' >Tu pedido</h3>
                {productSelected?.map((coffe) => {
                    return (
                        <div className='flex gap-6 ' key={coffe.id}>
                            <div className='w-[55.65974px]'>
                                <img src={coffe.img_url} alt="coffe" />
                            </div>
                            <div className='flex flex-col justify-center w-full'>
                                <p className='font-semibold text-sm leading-4 '>{coffe.brand}</p>
                                <p className='font-normal text-sm leading-4 '>Paquete de café, 250 gr</p>
                            </div>
                            <h3 className='flex items-center w-[80px] font-semibold text-lg leading-6 '>{(coffe.price * coffe.quantity).toFixed(2).toString().replace(/\./g, ',')} €</h3>
                        </div>
                    )
                })}
                <div className="w-full border border-[#e3ded7]"></div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between h-4'>
                        <p className='font-normal text-sm leading-4'>SUBTOTAL</p>
                        <p className='font-semibold text-sm leading-4'>
                            {totalSummry.toFixed(2).toString().replace(/\./g, ',')} €
                        </p>
                    </div>
                    <div className='flex justify-between h-4'>
                        <p className='font-normal text-sm leading-4'>ENVÍO</p>
                        <p className='font-semibold text-sm leading-4'>
                            {selected === 'free'
                                ? 'GRATIS'
                                : selected === 'urgent'
                                    ? '9,00 €'
                                    : ''
                            }
                        </p>
                    </div>
                    <div className="w-full border border-[#e3ded7]"></div>
                    <div className='flex justify-between h-10'>
                        <p className='font-semibold text-sm leading-4 text-[#000]'>TOTAL</p>
                        <div className='flex flex-col items-end gap-2'>
                            <p className='font-semibold text-sm leading-4'>
                                {selected === 'free'
                                    ? totalSummry.toFixed(2).toString().replace(/\./g, ',')
                                    : selected === 'urgent'
                                        ? (totalSummry + (9)).toFixed(2).toString().replace(/\./g, ',')
                                        : total.toFixed(2).toString().replace(/\./g, ',')
                                } €
                            </p>
                            <span className='font-normal text-xs leading-4 text-[#515051]' >
                                Incluye  {selected === 'free'
                                    ? totalVat.toFixed(2).replace(/\./g, ',')
                                    : selected === 'urgent'
                                        ? ((totalSummry + (9)) * vat).toFixed(2).replace(/\./g, ',')
                                        : totalVat.toFixed(2).replace(/\./g, ',')
                                } € de IVA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/tienda'
                className='font-semibold text-sm leading-4 bg-[#2A5B45] text-[#fff] py-[12px] px-6'
            >
                Volver a la tienda
            </Link>
        </div>
    )
}

export default Success