import costaRica from "../assets/img/costaRica.png";
import colombia from "../assets/img/colombia.png";
import laos from "../assets/img/laos.png";
import etiopia from "../assets/img/etiopia.png";
//import etiopia from "../assets/img/etiopia.png";
import coffeeMonteBello from "../assets/img/coffeeMonteBello.png";
import coffeeEtiopia from "../assets/img/coffeeEtiopia.png";
import coffeeLaCasita from "../assets/img/coffeeLaCasita.png";

type Product = {
    id: number;
    name: string;
    price: number;
};


// export const getData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data.products);
//     return data.products;
// }

export const getlocalStorage = (): Product[] => {
    const data = localStorage.getItem("product");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

export const getlocalStorageForm = () => {
    const data = localStorage.getItem("dataForm");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

export const products = [
    {
        "id": "6474ee0ebfd170bc8af15bdd",
        "brand": "Costa Rica Tarrazú",
        "price": 9.00,
        "img_url": costaRica,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15bde",
        "brand": "Colombia Los Naranjos",
        "price": 9,
        "img_url": colombia,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15bdf",
        "brand": "Laos Amanecer",
        "price": 9,
        "img_url": laos,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15be0",
        "brand": "Etiopía Yrgacheff",
        "price": 9,
        "img_url": etiopia,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15be1",
        "brand": "Coffee Monte Bello",
        "price": 15,
        "img_url": coffeeMonteBello,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15be2",
        "brand": "Etiopía Sidamo",
        "price": 17,
        "img_url": coffeeEtiopia,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15be3",
        "brand": "Costa Rica Monte Bello",
        "price": 12,
        "img_url": coffeeMonteBello,
        "available": true,
        "quanty": 1
    },
    {
        "id": "6474ee0ebfd170bc8af15be4",
        "brand": "Colombia La Casita",
        "price": 9,
        "img_url": coffeeLaCasita,
        "available": false,
        "quanty": 1
    }
];