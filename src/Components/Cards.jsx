import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AirplayIcon from '@mui/icons-material/Airplay';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactlessIcon from '@mui/icons-material/Contactless';

const Cards = ({title , subtitle, color}) => {



    return (
        <div className={`w-50 h-30 ${color} rounded-2xl relative backdrop-blur-xl shadow-xl`}>
            {/*upper icons */}

            <div className="p-2 flex items-center justify-between gap-3 opacity-90">
                <div>
                    <AppleIcon sx={{ fontSize: 18 }}/>
                </div>

                <div>
                    <div className="hidden" >
                        <AirplayIcon sx={{ fontSize: 18 }}/>
                    </div>

                    <div className="">
                        <AirplayIcon sx={{ fontSize: 18 }}/>
                    </div>

                    <div className="hidden">
                        <AirplayIcon sx={{ fontSize: 18 }}/>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 p-2">
                <h3 className="poppins-bold text-[15px]">{title}</h3>
                <h6 className="poppins-light text-[10px]">{subtitle}</h6>
            </div>
        </div>
    )
}
export default Cards
