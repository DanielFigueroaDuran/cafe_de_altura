import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CoffeContext } from "../components/context/Context";
const TotalCart = ({ handleonClick, label, route, text }) => {
    const { cart, selected, setSelected, total } = useContext(CoffeContext);
    const vat = 0.21;
    const totalVat = total * vat;
    return (
        <div className=" w-[384px] ">
            <div className="flex flex-col gap-4 p-6 bg-[#f7f5f3] text-[#000000]">
                <h3 className="font-semibold text-lg leading-6 ">Total del carrito</h3>
                <div className="w-full border border-[#e3ded7]"></div>
                <div className="flex justify-between">
                    <div>
                        <p className='font-normal text-sm leading-4'>SUBTOTAL</p>
                    </div>
                    <div id="price" className="font-semibold text-sm leading-4 text-[#000000] ">
                        {total.toFixed(2).toString().replace(/\./g, ',')} €
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className='font-normal text-sm leading-4'>ENVÍO</p>
                    </div>
                    <div className="text-[#000000]">
                        <p className=" font-semibold text-sm leading-4">
                            {selected === 'free'
                                ? 'GRATIS'
                                : selected === 'urgent'
                                    ? '9,00 €'
                                    : ''
                            }
                        </p>
                    </div>
                </div>
                <div className="w-full border border-[#e3ded7]"></div>
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-semibold text-sm leading-4 ">TOTAL</p>
                    </div>
                    <div>
                        <div className="flex flex-col text-right gap-2 ">
                            <p className='font-semibold text-sm leading-4'>
                                {selected === 'free'
                                    ? total.toFixed(2).toString().replace(/\./g, ',')
                                    : selected === 'urgent'
                                        ? (total + parseInt(9)).toFixed(2).toString().replace(/\./g, ',')
                                        : total.toFixed(2).toString().replace(/\./g, ',')
                                } €</p>
                            <div className="smal">
                                <small className="text-[#515051] font-normal text-xs leading-4 ">
                                    Incluye {selected === 'free'
                                        ? totalVat.toFixed(2).replace(/\./g, ',')
                                        : selected === 'urgent'
                                            ? ((total + parseInt(9)) * vat).toFixed(2).replace(/\./g, ',')
                                            : totalVat.toFixed(2).replace(/\./g, ',')
                                    } € de IVA</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-----------------boton total---------- --> */}
                <div className="flex gap-4">
                    <button onClick={handleonClick}>
                        <Link
                            to={route}
                            className="py-3 px-6 border-none rounded text-[#fff] bg-[#2a5b45] font-semibold
                         text-sm leading-4"
                        >
                            {label}
                        </Link>
                    </button>
                    <Link
                        to='/tienda'
                        className="py-3 px-6 border-none rounded font-semibold text-sm leading-4 
                            text-[#2A5B45]"
                    >
                        {text}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TotalCart