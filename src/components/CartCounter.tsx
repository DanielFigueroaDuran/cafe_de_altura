import { React, useContext, useState } from 'react'
import { CoffeContext } from './context/Context';

const CartCounter = ({ minius, plus, product }) => {
    const { cart, setCart, handleClick } = useContext(CoffeContext);

    const handleSubs = (id) => {
        //console.log(id);
        const productRepeat = cart.find((coffe) => coffe._id === product._id);
        const coffeDelete = cart.find((coffe) => coffe._id === id);
        const newCart = cart.filter((coffe) => {
            return coffe !== coffeDelete
        })
        productRepeat.quantity !== 1
            ?
            setCart(cart.map((item) => (item._id === product._id
                ? { ...product, quantity: productRepeat.quantity - 1 }
                : item
            )))
            : setCart(newCart)
    }

    return (
        <>
            <button
                className="flex items-center w-6 h-6 gap-[14px]"
                onClick={() => handleSubs(product._id)}
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