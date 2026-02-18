import React from 'react'

import {footerIcons} from "../../assets/assest.js";

const Taskbar = () => {
    return (
        <div className='mac flex items-center justify-between gap-2 w-full rounded-2xl p-3'>
            {footerIcons.map((items,index)=>(
                <div  key={index}>
                    <img className="w-12 h-12" src={items.icon}/>
                </div>
            ))}
        </div>
    )
}
export default Taskbar
