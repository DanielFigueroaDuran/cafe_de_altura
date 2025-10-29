//import Minus from "../assets/icon/heroicons-outline_minus-sm.png";
//import Plus from "../assets/icon/heroicons-outline_plus-sm.png";
import type { ProductType } from "../utils/data";
//import type { ProductType } from "../utils/data";
//import CartCounter from "./CartCounter";
//import CartCounter from './CartCounter';
//import { ProductType } from '../utils/data';
type CartItemTypeProps = {
    product: ProductType;
};

const CartItem = ({ product }: CartItemTypeProps) => {
    const { price, brand, img_url, id, quantity } = product;

    return (
        <>
            <div className='flex gap-12'>
                <div className="flex items-center w-[88px] h-[55.6px] gap-[14px] border-none">
                    {/* <CartCounter minius={Minus} plus={Plus} product={product} quantity={quantity} key={id} /> */}
                </div>
                <div className='flex flex-col gap-[19px] ' key={id}>
                    <div className='flex items-center ' >
                        <img className="w-[55.66px] h-[55.66px]" src={img_url} alt="cafe" />
                        <div className="flex justify-between">
                            <div className="w-[506px]">
                                <p className="text-[#000000] text-sm font-semibold leading-4">
                                    {brand}
                                </p>
                                <p className="text-[#000000]">Paquete de café, 250 gr</p>
                            </div>
                            <div className="text-[#000000]">
                                <h3 className="text-[#000000]">{(price * quantity).toFixed(2).toString().replace(/\./g, ',')} €</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border border-[#e3ded7]"></div>
        </>
    )
}

export default CartItem