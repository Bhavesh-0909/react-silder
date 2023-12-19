import React, { useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

function Slider(props) {
    let {Toggler, setToggler}=props;

    function changehandler(){
        setToggler((prev)=> !prev)        
    }
  return (
    <div>
        <div onClick={changehandler}
            className={`w-16 h-9 rounded-full p-1 shadow-sm 
            ${Toggler ? "bg-gray-500": "bg-orange-300"} flex items-center`}>
            <div 
                className={`w-7 h-7 rounded-full shadow-sm flex justify-center items-center 
                ${Toggler ? 'bg-gray-800 translate-x-7' : 'bg-orange-500'}`}>
                    {Toggler?(<FaMoon/>):(<FaSun/>)}
            </div>
    </div>
    </div>
    
  )
}

export default Slider;