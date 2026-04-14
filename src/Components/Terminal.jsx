import React, {useEffect, useState} from 'react'
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import {BiHome} from "react-icons/bi";

const Terminal = () => {
    
    
    const [terminal, setTerminal] = useState(0);

    useEffect(() => {

        const interval = setInterval(()=>{
            setTerminal(prevState => prevState+1)
        },500)

        return () => {
            clearInterval(interval)
        };
    }, []);
    
    return (
        <div className="h-[400px] w-[700px] ">
            {/*upper div*/}
            <div className="bg-gray-50 flex w-full rounded-tr-[8px] rounded-tl-[8px]">
                <div>
                   <WindowControls target="terminal"/>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                    <BiHome className="text-gray-700 ml-3 mr-3"/>
                    <h3 className="poppins-thin">tnelson--bash--40x70</h3>
                </div>
            </div>
            <div className="bg-black w-full h-full rounded-bl-[8px] rounded-br-[8px] p-2">
                <h3 className="text-green-400 tracking-wide poppins-extrabold-italic text-[12px]">Last login :Tue Dec 27 10:48:37 on ttys000</h3>
                <div className="flex">
                    <h3 className="text-green-400 tracking-wide poppins-extrabold-italic text-[12px]">lakshan's portfolio:~Jrices$</h3>
                    <div className={`bg-white w-2 h-4 ml-1 mr-1 ${terminal%2 == 1 ?"hidden":""}`}></div>
                </div>
                <input/>
            </div>
        </div>
    )
}

const terminalWindow = WindowWrapper(Terminal,"terminal")
export default terminalWindow;
