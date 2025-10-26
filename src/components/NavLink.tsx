import { Link } from 'react-router-dom';

type NavLinktypeProps = {
    classStyle: string
};

const NavLink = ({ classStyle }: NavLinktypeProps) => {
    return (
        <div className={classStyle}>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="/tienda">Tienda</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Suscripción</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Para Empresas</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Sobre nosotros</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Contacto</Link>
        </div>
    )
}

export default NavLink