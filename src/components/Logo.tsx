import { Link } from 'react-router-dom';
import iconCoffe from "../assets/icon/coffee.png";

const Logo = () => {
    return (
        <div className='flex items-center  gap-[7.33px] '>
            <Link to={'/'}><h2 className='font-medium text-2xl leading-7'>cafedealtura.com</h2></Link>
            <div className=' w-5 h-6  '>
                <img src={iconCoffe} alt="iconCoffe" />
            </div>
        </div>
    )
}

export default Logo