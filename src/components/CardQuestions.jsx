import { React, useState } from 'react';
import Icon2 from "../assets/icon/Icon2.png";


const CardQuestions = ({ className, title, img, paragraph }) => {
    const [iconpico, setIconpico] = useState(false);

    const handleClick = (event) => {
        !iconpico
            ? setIconpico(true)
            : setIconpico(false);
    };

    return (
        <>
            {!iconpico
                ? < div onClick={handleClick} className=' w-[668px] cursor-pointer flex flex-col items-start bg-[#fff] gap-4 p-6 rounded-xl ' >
                    <div className='flex justify-between items-center w-full'>
                        <h3 className='text-[#2b2a2b] font-semibold text-xl leading-6'>{title}</h3>
                        <img
                            className="w-3 h-2"
                            src={img}
                            alt="Iconpico"
                        />
                    </div>
                </div >
                : < div onClick={handleClick} className=' w-[668px] cursor-pointer flex flex-col    items-start    bg-[#fff] gap-4 p-6 rounded-xl ' >
                    <div className='flex justify-between items-center w-full'>
                        <h3 className='text-[#2b2a2b] font-semibold text-xl leading-6'>{title}</h3>
                        <img
                            className="w-3 h-2"
                            src={Icon2}
                            alt="Iconpico"
                        />
                    </div>
                    <div className="w-full border border-[#e3ded7]"></div>
                    <div>
                        <p className='font-normal  text-xs leading-4 text-[#2b2a2b]'>{paragraph}</p>
                    </div>
                </div >
            }
        </>
    )
}

export default CardQuestions