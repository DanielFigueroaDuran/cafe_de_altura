import Icon from "../../assets/icon/Icon.png";
import HeroImage2 from "../../assets/img/HeroImage2.png";
import { Link } from 'react-router-dom';

const SectionImages = () => {
    return (
        <section className="flex justify-center p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:items-center lg:w-full justify-between gap-10 border-2 border-black">
                <div className="flex flex-col gap-4 md:w-[457px]">
                    <h2 className="text-[#2a5b45] font-medium text-center text-lg lg:text-left md:text-2xl leading-7">Pruébalo en nuestro coffee shop</h2>
                    <p className="font-normal text-sm leading-4">
                        Visita nuestra cafetería en el centro de la ciudad para probar los
                        granos de café antes de hacer tu pedido y llévate un descuento
                    </p>
                    <div className="flex gap-4  items-baseline font-semibold text-sm leading-4 underline">
                        <Link to="#" className="font-semibold text-sm leading-4 text-[#000000] underline">
                            Cómo llegar
                        </Link>
                        <img
                            src={Icon}
                            alt="Arrow"
                        />
                    </div>
                </div>
                <div className="flex md:w-[588px] h-[390px] rounded-3xl bg-contain bg-no-repeat">
                    <img src={HeroImage2} alt="HeroImage" />
                </div>
            </div>
        </section>
    )
}

export default SectionImages