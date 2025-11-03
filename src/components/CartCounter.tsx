import { useCoffe } from '../context/useCoffe';
import { products, type ProductType } from '../utils/data';

type CartCounterProps = {
    minius: string;
    plus: string;
    product: ProductType
    quantity: number
}

const CartCounter = ({ minius, plus, product }: CartCounterProps) => {
    const { cart, setCart, handleClick } = useCoffe();

    const handleSubs = (id: string) => {
        const productRepeat = cart.find((coffe) => coffe.id === id);
        if (!productRepeat) return; // ← si no existe, detenemos la función

        const newCart = cart.filter((coffe) => coffe.id !== id);

        if (productRepeat.quantity !== 1) {
            setCart(
                cart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: productRepeat.quantity - 1 }
                        : item
                )
            );
        } else {
            setCart(newCart);
        }
    };

    return (
        <>
            <button
                className="flex items-center w-6 h-6 gap-[14px]"
                onClick={() => handleSubs(product.id)}
            >
                <img
                    src={minius}
                    alt="minius"
                />
            </button >
            <span id="counter">
                <p className='w-6 h-6 text-[#2a5b45] bg-[#2a5b451a] text-center  rounded-[200px]'>{product.quantity}</p>
            </span>
            <button
                className="flex items-center w-6 h-6 gap-[14px]"
                onClick={() => handleClick(product)}
            >
                <img src={plus} alt="plus" />
            </button>
        </>
    )
}

export default CartCounter