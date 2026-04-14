import React from 'react'
import WindowControls from "./WindowControls.jsx";
import {projects, sidebarIcons} from "../../assets/assest.js";
import {Folder} from "../../assets/assest.js"

const Sidebar = ({target}) => {
    return (
        <div >
            <div className='w-full'>
                <WindowControls target={target}/>
                <hr className='w-full ml-2 mr-2 text-gray-600' />
            </div>

            {/*favorites section*/}
            <div className='p-0.5'>
                <h2 className='poppins-bold text-gray-700 text-[12px] ml-2 mr-2 mt-3 '>Favorites</h2>

                {sidebarIcons.map((items,index)=>(
                    <div key={index}>
                        <div className='flex p-0.5'>
                            <img src={items.icon} className='w-4 h-4 m-2'/>
                            <p>{items.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <p className="poppins-bold text-gray-600 text-[12px] ml-2 mt-3">Navigate</p>

                <div className="mt-3 ml-4">
                    {projects.map((items,index)=>(
                        <div className='flex items-center gap-1 m-2'>
                            <img src={Folder} className="w-4 h-4 "/>
                            <p className="text-[12px]">{items.name.slice(0,9)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Sidebar
