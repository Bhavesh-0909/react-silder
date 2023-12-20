import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import image from "./s-l1200.webp"
import night from "./desktop-wallpaper-animated-stars-cartoon-night-sky.jpg"

function Slider(props) {
    let {Toggler, setToggler}=props;

    function changehandler(){
        setToggler((prev)=> !prev)        
    }
  return (
    <div>
        <div onClick={changehandler}
            className={` relative w-16 h-9 rounded-full p-1 shadow-sm overflow-hidden
           flex items-center`}>
            <img 
            src={Toggler? night : image}
            className='object-cover absolute z-0 left-0 transition-all duration-300 '

            />
            <div 
                className={`relative z-10 w-7 h-7 rounded-full shadow-sm flex justify-center items-center  
                ${Toggler ? 'bg-gray-800 translate-x-7 rotate-0' : 'bg-orange-500 rotate-180'} transition-all duration-500`}>
                    {Toggler?(<FaMoon/>):(<FaSun/>)}
            </div>
    </div>
    </div>
    
  )
}

export default Slider;