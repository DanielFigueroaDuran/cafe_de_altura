import { Link } from 'react-router-dom';

const NavLink = () => {
    return (
        <nav className=''>
            <ul className={`flex gap-4 font-semibold text-sm p-2 leading-4`} >
                <Link className='p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="/tienda">Tienda</Link>
                <Link className='p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Suscripción</Link>
                <Link className='p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Para Empresas</Link>
                <Link className='p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Sobre nosotros</Link>
                <Link className='p-2 hover:bg-[#f7f5f31a] hover:rounded-lg' to="#">Contacto</Link>
            </ul>
        </nav>
    )
}

export default NavLink