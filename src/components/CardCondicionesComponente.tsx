type CardCondicionesComponenteProps = {
    img: string,
    title: string,
    paragraph: string,
    className: string
}

const CardCondicionesComponente = ({ img, title, paragraph, className }: CardCondicionesComponenteProps) => {
    return (
        <div className={className}>
            <div className="w-[64px] h-[64px]">
                <img src={img} alt="illustration" />
            </div>
            <h3 className='font-semibold text-lg  text-[#2b2a2b] leading-6 '>{title}</h3>
            <p className='font-normal text-sm leading-4 text-[#111827]'>{paragraph}</p>
        </div>
    )
}

export default CardCondicionesComponente