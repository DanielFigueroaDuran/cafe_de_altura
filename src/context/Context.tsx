import { createContext, useState, useEffect } from "react";
import { getlocalStorage, products as initialProduct, type Product } from '../utils/data.ts';

type CoffeContextType = {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    cart: Product[],
    setCart: React.Dispatch<React.SetStateAction<Product[]>>,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    productSelected: Product[],
    setProductSelected: React.Dispatch<React.SetStateAction<Product[]>>
    isloading: boolean,
    handleClick: (product: Product) => void,
    total: number,
    totalSummry: number
};

type CoffeProviderProps = {
    children: React.ReactNode;
};

export const CoffeContext = createContext<CoffeContextType | undefined>(undefined);
//const coffeeProduct = JSON.parse(localStorage.getItem("coffeStorage")) || [];

const CoffeProvider = ({ children }: CoffeProviderProps) => {

    const [products, setProducts] = useState<Product[]>(initialProduct);
    const [cart, setCart] = useState<Product[]>(getlocalStorage());
    const [selected, setSelected] = useState<string>('free');
    const [productSelected, setProductSelected] = useState<Product[]>([]);
    const [totalSummry, setTotalSummry] = useState([]);
    const [isloading, setIsloading] = useState<boolean>(false);

    const total = cart.reduce((acc, coffe) => acc + coffe.price * coffe.quantity, 0);
    //const apiCoffe = `https://cafe-de-altura.vercel.app/api/products`;

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(cart));
    }, [cart]);

    const handleClick = (product: Product) => {
        setIsloading(true);

        setTimeout(() => {
            setIsloading(false);
        }, 1000);

        const productRepeat = cart.find((coffe) => coffe.id === product.id);;
        if (productRepeat) {
            setCart(cart.map((item) => item.id === product.id
                ? { ...product, quantity: productRepeat.quantity + 1 }
                : item)
            )
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        };
    }

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
                handleClick,
                total,
                totalSummry,
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