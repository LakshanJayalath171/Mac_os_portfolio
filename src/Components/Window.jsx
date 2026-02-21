import React, {Fragment} from 'react'
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {footerIcons, social} from "../../assets/assest.js";
import {profile,photos} from "../../assets/assest.js";
import files from "../../assets/Icons/Files.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Contact from "./Contact.jsx";
import {useState} from "react";
import Cards from "./Cards.jsx";

//importing certifications
import {python_certificate,java_certificates,Js_certificate,Ai,web_dev_certificate,} from "../../assets/assest.js";



const Window = () => {

    const [state,setState] = useState(1)
    const [contact ,setContact] = useState(true);

    const handleContact = ()=>{
        setContact(!contact);
    }


    return (
        <div className='mac flex relative h-[400px] w-[700px] rounded-[8px]'>
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
                        <input className="w-60 ml-3 relative mr-3 rounded-[5px] h-6 border-none outline-none mac placeholder:text-sm py-2" />
                    </div>

                    <div className="text-left mt-5">

                        {footerIcons.map((items,i)=>(
                            <div className="p-2 pt-1 pb-0 flex items-start gap-2 cursor-pointer" key={i}>
                                <img className="w-5 h-5" src={items.icon}/><p className="text-shadow-black font-semibold text-[15px] poppins-bold">{items.name}</p>

                            </div>
                        ))}

                    </div>

                </div>



                {/*//bottom profile section*/}

                <div className="mac relative m-2 p-2 rounded-[8px] absolute bottom-0 w-[240px] left-0 mt-24 flex items-start justify-start">
                    <img src={profile} className="w-6 h-6 rounded-full"/>
                    <p className="text-[15px] poppins-bold ml-3">Lakshan Jayalath</p>
                </div>

            </div>

            {/*second devision */}
            <div className="flex-3 h-full relative overflow-y-auto p-4 overflow-y-auto hide-vertical-scroll">

                {/*upper icons for share and previos page */}
                <div className="flex justify-between ga-10">
                    <ArrowBackIosIcon className="text-gray-500" sx={{ fontSize: 20 }}/>
                    <IosShareIcon className="text-gray-500 " sx={{ fontSize: 20 }}/>
                </div>

                {/*Hero section */}

               <div className="p-3 pt-5 flex items-start">
                   <img src={photos} className="w-20 h-20 "/>

                   <div className=" pl-5">
                       <h1 className="font-bold text-3xl text-shadow-white poppins-extrabold">Certifications</h1>
                       <h4 className="font-semibold text-gray-800 poppins-bold opacity-75">Thats my certifications Showcase</h4>
                       <button className="mt-4 bg-blue-600 pt-2 pb-2 pl-4 pr-4 rounded-3xl poppins-medium" onClick={handleContact}>Contact</button>

                   </div>
               </div>
                <hr className="text-gray-500 "/>
                {/*contact section */}
                {contact?<div className="flex items-center justify-center">

                    {social.map((items,index)=>(
                        <Contact name={items.name} image={items.image} url={items.url}/>
                    ))}


                </div>:<></>}


                {/*Detail section */}

                {/*Python certificates */}
                <div className="w-full  mt-5">
                    <div className="p-3">
                        <h1 className="poppins-extrabold text-[25px]">Python Certificates</h1>
                        <h4 className="poppins-medium text-gray-800 opacity-70">Since 2023</h4>
                    </div>

                    <div className="flex grid grid-cols-2 gap-[2px]">
                        {python_certificate.map((items,index)=>(
                            <Cards title={items.name} subtitle={items.Organization} color={items.color}/>
                        ))}
                    </div>
                </div>


                {/*java certificates */}

                <div className="w-full  mt-5">
                    <div className="p-3">
                        <h1 className="poppins-extrabold text-[25px]">Java Certificates</h1>
                        <h4 className="poppins-medium text-gray-800 opacity-70">Since 2023</h4>
                    </div>

                    <div className="flex grid grid-cols-2 gap-[2px]">
                        {java_certificates.map((items,index)=>(
                            <Cards title={items.name} subtitle={items.Organization} color={items.color}/>
                        ))}
                    </div>
                </div>

                {/*web dev certificates*/}

                <div className="w-full  mt-5">
                    <div className="p-3">
                        <h1 className="poppins-extrabold text-[25px]">Web Development Certificates</h1>
                        <h4 className="poppins-medium text-gray-800 opacity-70">Since 2023</h4>
                    </div>

                    <div className="flex grid grid-cols-2 gap-[2px]">
                        {web_dev_certificate.map((items,index)=>(
                            <Cards title={items.name} subtitle={items.Organization} color={items.color}/>
                        ))}
                    </div>
                </div>

                {/*Java script certificate*/}

                <div className="w-full  mt-5">
                    <div className="p-3">
                        <h1 className="poppins-extrabold text-[25px]">Java Script Certificates</h1>
                        <h4 className="poppins-medium text-gray-800 opacity-70">Since 2023</h4>
                    </div>

                    <div className="flex grid grid-cols-2 gap-[2px]">
                        {Js_certificate.map((items,index)=>(
                            <Cards title={items.name} subtitle={items.Organization} color={items.color}/>
                        ))}
                    </div>
                </div>

                {/*Ai certificates*/}

                <div className="w-full  mt-5">
                    <div className="p-3">
                        <h1 className="poppins-extrabold text-[25px]">Artificial Intelligence Certificates</h1>
                        <h4 className="poppins-medium text-gray-800 opacity-70">Since 2023</h4>
                    </div>

                    <div className="flex grid grid-cols-2 gap-[2px]">
                        {Ai.map((items,index)=>(
                            <Cards title={items.name} subtitle={items.Organization} color={items.color}/>
                        ))}
                    </div>
                </div>

                <Fragment></Fragment>
                {/*Bottom section */}

                <div className="h-[5px] fixed absolute top-95 right-0 flex items-start gap-2 pb-2 pr-3">
                    <LaptopMacIcon sx={{ fontSize: 15 }}/>
                    <p className="text-[12px] font-bold poppins-medium">Mac</p>
                </div>
            </div>
        </div>
    )
}
export default Window
