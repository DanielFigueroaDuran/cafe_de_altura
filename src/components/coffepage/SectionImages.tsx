import React from 'react'
import Icon from "../assets/icon/Icon.png";
import HeroImage2 from "../assets/img/HeroImage2.png";
import { Link } from 'react-router-dom';

const SectionImages = () => {
    return (
        <section className="flex justify-center py-[44.61px] px-10">
            <div className="flex items-center w-[1200px] justify-between">
                <div className="flex flex-col gap-4 w-[457px]">
                    <h2 className="text-[#2a5b45] font-medium text-2xl leading-7">Pruébalo en nuestro coffee shop</h2>
                    <p className="font-normal text-sm leading-4">
                        Visita nuestra cafetería en el centro de la ciudad para probar los
                        granos de café antes de hacer tu pedido y llévate un descuento
                    </p>
                    <div className="flex gap-4  items-baseline font-semibold text-sm leading-4 underline">
                        <Link className="font-semibold text-sm leading-4 text-[#000000] underline">
                            Cómo llegar
                        </Link>
                        <img
                            src={Icon}
                            alt="Arrow"
                        />
                    </div>
                </div>
                <div className="flex  w-[588px] h-[390px] rounded-3xl bg-contain bg-no-repeat">
                    <img src={HeroImage2} alt="HeroImage" />
                </div>
            </div>
        </section>
    )
}

export default SectionImages