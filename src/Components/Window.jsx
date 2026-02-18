import React from 'react'
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {footerIcons} from "../../assets/assest.js";


const Window = () => {
    return (
        <div className='mac flex'>
            {/*first division */}
            <div className="flex-1 rounded-2xl">

                <div className='p-4 flex items-center '>
                    <div className="w-3 h-3 rounded-full bg-red-600 ml-2"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-600 ml-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-800 ml-2"></div>
                </div>

                <div className="relative">

                    <div>
                        <SearchSharpIcon className="absolute left-4 top-0"/>
                        <input className="w-60 ml-3 mr-3 rounded-[5px] h-6 border-none outline-none mac placeholder:text-sm py-2" placeholder="Find"/>
                    </div>

                    <div className="text-left mt-5">

                        {footerIcons.map((items,i)=>(
                            <div className="p-2 pt-1 pb-0 flex items-start gap-2" key={i}>
                                <img className="w-5 h-5" src={items.icon}/><p className="text-shadow-black font-semibold text-[15px]">{items.name}</p>

                            </div>
                        ))}

                    </div>

                </div>
            </div>

            {/*second devision */}
            <div className="flex-3"></div>
        </div>
    )
}
export default Window
