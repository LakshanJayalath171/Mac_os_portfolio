import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import {title_items} from "../../assets/assest.js";
import AirplayIcon from '@mui/icons-material/Airplay';
import ContactlessIcon from '@mui/icons-material/Contactless';
import WifiIcon from '@mui/icons-material/Wifi';
import Battery50Icon from '@mui/icons-material/Battery50';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Title = () => {
    return (
        <div className="flex items-center justify-between p-[1px] bg-white/20 backdrop-blur-2xl rounded-[5px] border border-white/30 shadow-2xl">

            <div className="flex items-center justify-between gap-2">
                <AppleIcon className="text-white text-2xl ml-5 mr-4" />

                {title_items.map((items,index)=>(
                    <div key={index} className="flex justify-between gap-3">
                        <div>
                            <p>{items}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className="text-white flex items-center justify-between gap-3">
                <div><AirplayIcon/></div>
                <div><ContactlessIcon/></div>
                <div><WifiIcon/></div>
                <div className='rotate-270'>
                    <Battery50Icon/>
                </div>
                <div><SearchSharpIcon/></div>

                <div>
                    <p>mon june 22  7:22 AM</p>
                </div>
            </div>


        </div>
    )
}
export default Title
