import React from 'react'
import {Folder} from "../../assets/assest.js";


const FolderCard = ({title}) => {
    return (
        <div className=" w-[125px] h-[80px] m-3">
            <div className="w-full h-full flex items-center justify-center">
                <img src={Folder} className="w-24 h-20"/>
            </div>
            <div className="w-full flex items-center justify-center">
                <h3 className="poppins-bold text-[13px]">{title.toString().slice(0,15)}</h3>
            </div>
        </div>
    )
}
export default FolderCard
