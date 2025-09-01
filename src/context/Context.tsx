import React, { useContext, useEffect } from 'react'
import { createContext, useState } from "react";
import { getlocalStorage, type Products } from '../utils/data.ts';

type CoffeContextType = {
    products: Products[],
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>,
    cart: Products[],
    setCart: React.Dispatch<React.SetStateAction<Products[]>>,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    productSelected: Products[],
    setProductSelected: React.Dispatch<React.SetStateAction<Products[]>>
    isloading: boolean
};

type CoffeProviderProps = {
    children: React.ReactNode;
};

export const CoffeContext = createContext<CoffeContextType | undefined>(undefined);
//const coffeeProduct = JSON.parse(localStorage.getItem("coffeStorage")) || [];

const CoffeProvider = ({ children }: CoffeProviderProps) => {

    const [products, setProducts] = useState<Products[]>([]);
    const [cart, setCart] = useState<Products[]>(getlocalStorage());
    const [selected, setSelected] = useState<string>('free');
    const [productSelected, setProductSelected] = useState<Products[]>([]);
    const [totalSummry, setTotalSummry] = useState([]);
    const [isloading, setIsloading] = useState<boolean>(false);

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
        <CoffeContext.Provider value={
            {
                products,
                setProducts,
                cart,
                setCart,
                selected,
                setSelected,
                productSelected,
                setProductSelected,
                //      handleClick,
                //        total,
                //totalSummry,
                //setTotalSummry,
                isloading
            }
        }
        >
            {children}
        </CoffeContext.Provider>
    )
}

// export const useBook = () => {
//     const context = useContext(CoffeContext);
//     if (!context) {
//         throw new Error("CoffeContext debe usarse dentro de un CoffeContext");
//     }
//     return context;
// };

export default CoffeProvider;