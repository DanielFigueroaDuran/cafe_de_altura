import { Link } from 'react-router-dom';

const NavLink = () => {
    return (
        <>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="/tienda">Tienda</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Suscripción</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Para Empresas</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Sobre nosotros</Link>
            <Link className=' p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Contacto</Link>
        </>
    )
}

export default NavLink