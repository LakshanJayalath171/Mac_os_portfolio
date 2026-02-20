import React from 'react'
import {github,instagram,threads,linkedin} from "../../assets/assest.js";


const Contact = ({name,image,url}) => {
    return (
        <div className="w-25 h-25 opacity-50">
            <h3 className="text-gray-800 text-[18px] font-bold  m-[1px] opacity-60 poppins-extrabold">Github</h3>
            <div className="flex w-full">
                <img src={image} className="w-15 h-15"/>
            </div>
            <a className="cursor-pointer " href={url}>
                <h3 className="text-gray-800 text-[12px] m-[1px] poppins-medium poppins-bold">{name}</h3>
            </a>

        </div>
    )
}
export default Contact
