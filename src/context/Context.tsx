import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import { getlocalStorage } from '../utils/data.ts';

type CoffeContextType = {
    coffees: string[];
    addCoffee: (coffee: string) => void;
};

type CoffeProviderProps = {
    children: React.ReactNode;
};

export const CoffeContext = createContext<CoffeContextType | undefined>(undefined);
//const coffeeProduct = JSON.parse(localStorage.getItem("coffeStorage")) || [];

const CoffeProvider = ({ children }: CoffeProviderProps) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(getlocalStorage());
    const [selected, setSelected] = useState('free');
    const [productSeleted, setProductSeleted] = useState([]);
    const [totalSummry, setTotalSummry] = useState([]);
    const [isloading, setIsloading] = useState(false);

    //  const total = cart.reduce((acc, coffe) => acc + coffe.price * coffe.quantity, 0);
    //const apiCoffe = `https://cafe-de-altura.vercel.app/api/products`;

    // useEffect(() => {
    //     getData(apiCoffe).then(coffe => setProducts(coffe));
    //     localStorage.setItem("product", JSON.stringify(cart));
    // }, [cart]);

    // const handleClick = (product) => {
    //     setIsloading(true);

    //     setTimeout(() => {
    //         setIsloading(false);
    //     }, 1000);

    //     const productRepeat = cart.find((coffe) => coffe._id === product._id);
    //     if (productRepeat) {
    //         setCart(cart.map((item) => item._id === product._id ? { ...product, quantity: productRepeat.quantity + 1 } : item))
    //     } else {
    //         setCart([...cart, { quantity: 1, ...product }]);
    //     };
    // }

    return (
        <CoffeContext.Provider value={{ products, setProducts, cart, setCart, selected, setSelected, handleClick, total, productSeleted, setProductSeleted, totalSummry, setTotalSummry, isloading }}>
            {children}
        </CoffeContext.Provider>
    )
}

export default CoffeProvider;