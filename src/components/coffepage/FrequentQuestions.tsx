import Icon from "../../assets/icon/Iconpico.png";
import Arrow from "../../assets/icon/Icon3.png";
//import Icon2 from "../../assets/icon/Icon2.png";
//import Show from './Show';
//import CardQuestions from './CardQuestions';
import Show from "../Show";
import CardQuestions from "../CardQuestions";

const FrequentQuestions = () => {
    return (
        <div className="flex flex-col items-center bg-[#2a5b45] py-12 gap-6 ">
            <h2 className="text-[#fff] font-medium text-2xl leading-7">Preguntas frecuentes</h2>
            <div className="flex flex-col py-6 px-[306px] gap-4">
                <CardQuestions
                    title={'¿Cómo hago el pedido?'}
                    img={Icon}
                    paragraph={' Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'}
                />
                <CardQuestions
                    title={'¿Por qué los precios son tan bajos?'}
                    img={Icon}
                    paragraph={' Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}
                />
                <CardQuestions
                    title={'¿Es posible enviar café a mi oficina?'}
                    img={Icon}
                    paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea repellat aperiam? Recusandae praesentium, possimus accusamus at veniam harum maiores dicta repudiandae unde labore, iure quo, ipsam asperiores ipsum dolor?'}
                />
            </div>
            <Show
                className={'flex gap-3 items-center  font-semibold text-sm leading-4 text-[#fff] underline'}
                label={'Resolvemos tus dudas'}
                icon={Arrow}
                classIcon={'arrow'}
            />
        </div>
    )
}

export default FrequentQuestions