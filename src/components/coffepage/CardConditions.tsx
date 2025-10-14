import receive from "../../assets/icon/Illustration.png";
import shipping from "../../assets/icon/Illustration2.png";
import discounts from "../../assets/icon/Illustration3.png";
import CardCondicionesComponente from "../CardCondicionesComponente";

const CardConditions = () => {
    return (
        <div className=" backgroundCoffe flex flex-col items-center py-12 gap-6 bg-cover bg-center bg-no-repeat w-full">
            <h2 className='font-medium text-2xl leading-7 text-[#fff] text-center'>
                Café con las mejores condiciones
            </h2>
            <div className="flex flex-col md:flex-wrap lg:flex-row justify-center gap-6">

                <CardCondicionesComponente
                    className={'flex flex-col text-center items-center p-6 bg-[#fff] gap-4 w-[316px] h-[232px] rounded-lg '}
                    img={receive}
                    title={'Recibe tu pedido sin preocuparte'}
                    paragraph={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}
                />

                <CardCondicionesComponente
                    className={'flex flex-col items-center text-center bg-[#fff] gap-4 w-[316px] rounded-lg p-6'}
                    img={shipping}
                    title={'Envío en 24/48h'}
                    paragraph={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
                />

                <CardCondicionesComponente
                    className={'flex flex-col items-center text-center bg-[#fff] gap-4 w-[316px] rounded-lg p-6'}
                    img={discounts}
                    title={'Descuentos y beneficios'}
                    paragraph={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'}
                />
            </div>
        </div>
    )
}

export default CardConditions