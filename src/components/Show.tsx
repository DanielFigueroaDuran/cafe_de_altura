
import { Link } from 'react-router-dom'

type ShowtypeProps = {
    className: string,
    link?: string,
    label: string,
    classIcon: string,
    icon: string
}

const Show = ({ className, link, label, classIcon, icon }: ShowtypeProps) => {
    return (
        <div className={className}>
            <Link to={link ?? "#"}>{label}</Link>
            <img className={classIcon} src={icon} alt="Arrow" />
        </div >
    )
}

export default Show