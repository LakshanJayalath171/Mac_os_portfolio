import React, {Fragment} from 'react'

import {
    profile,
    setting
} from "../../assets/assest.js";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IosShareIcon from "@mui/icons-material/IosShare";
import {softSkills,programming_lang,dev_tools,frontend_frameworks,backend_frameworks,DBMS,rel_courseworks} from "../../assets/assest.js";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import Sidebar from "./Sidebar.jsx";



const Settings = () => {
    return (
        <div className='mac flex relative h-[400px] w-[700px] rounded-[8px] overflow-hidden'>
            <div className="flex-1">
                <Sidebar target="settings"/>

            </div>

            {/*second devision */}
            <div className="flex-3 h-full relative overflow-y-auto p-4 overflow-y-auto hide-vertical-scroll">

                {/*upper icons for share and previous page */}
                <div className="flex justify-between ga-10">
                    <ArrowBackIosIcon className="text-gray-500" sx={{ fontSize: 20 }}/>
                    <IosShareIcon className="text-gray-500 " sx={{ fontSize: 20 }}/>
                </div>

                {/*Hero section */}
                <div className="p-3 pt-5 flex items-start">
                    <img src={setting} className="w-20 h-20 "/>

                    <div className=" pl-5">
                        <h1 className="font-bold text-3xl text-shadow-white poppins-extrabold">Profile</h1>
                        <h4 className="font-semibold text-gray-800 poppins-bold opacity-75">This Is My Profile Section</h4>


                    </div>

                </div>
                <hr className="text-gray-500 "/>

                <div className="p-3 flex">
                    <div className="flex-1">
                        <img src={profile} className='w-15 h-15 rounded-full bg-cover'/>

                    </div>
                    <div className="flex-4 ">
                        <h3 className="poppins-extrabold text-[25px]">Lakshan Jayalath</h3>
                        <p className="poppins-light">Software Developer</p>
                    </div>
                </div>
                <div>
                    <p className="poppins-regular">Hi, I'm <span className="poppins-extrabold text-[18px]">Lakshan Jayalath</span> — a passionate Software Developer and a second year undergraduate at the <span className="poppins-extrabold">University of Colombo School of Computing</span>, pursuing a Bachelor of Information Technology.
                    <br/>
                        <br/>   Driven by curiosity and a love for exploring <span className="poppins-bold">new technologies</span>, I enjoy turning ideas into reality through teamwork, creativity, and problem-solving—whether it’s crafting intuitive user experiences or building reliable backend systems.</p>

                    <div className="mt-5">
                        <h2 className="poppins-bold text-[25px]">Relevant Coursework</h2>
                        {rel_courseworks.map((items,i)=>(
                            <div className="flex">
                                <div><NavigateNextIcon/></div>
                                <p className="poppins-bold text-[12px] mt-1">{items}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*skills section */}

                {/*programming languages */}

                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Programming Languages</h2>
                    <p></p>

                    {programming_lang.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items.name}</p>

                            </div>
                            <div className="flex-1 flex items-end justify-end">
                                <img src={items.icon} className="w-7 h-7 "/>
                            </div>
                        </div>
                    ))}
                </div>

                {/*front-end frameworks */}
                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Front-End Frameworks</h2>
                    <p></p>

                    {frontend_frameworks.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items.name}</p>

                            </div>
                            <div className="flex-1 flex items-end justify-end">
                                <img src={items.icon} className="w-7 h-7 "/>
                            </div>
                        </div>
                    ))}
                </div>

                {/*//back-end frameworks */}

                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Back-End Frameworks</h2>
                    <p></p>

                    {backend_frameworks.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items.name}</p>

                            </div>
                            <div className="flex-1 flex items-end justify-end">
                                <img src={items.icon} className="w-7 h-7 "/>
                            </div>
                        </div>
                    ))}
                </div>


                {/*development tools */}
                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Development Tools</h2>
                    <p></p>

                    {dev_tools.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items.name}</p>

                            </div>
                            <div className="flex-1 flex items-end justify-end">
                                <img src={items.icon} className="w-7 h-7 "/>
                            </div>
                        </div>
                    ))}
                </div>

                {/*Database management systems */}

                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Database Management Systems</h2>
                    <p></p>

                    {DBMS.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items.name}</p>

                            </div>
                            <div className="flex-1 flex items-end justify-end">
                                <img src={items.icon} className="w-7 h-7 "/>
                            </div>
                        </div>
                    ))}
                </div>

                {/*soft skills */}

                <div className="mt-5">
                    <h2 className="text-2xl poppins-extrabold ">Soft Skills</h2>
                    <p></p>

                    {softSkills.map((items,index)=>(
                        <div className="mac flex p-2 rounded-[8px] border border-white mt-1 hover:scale-101" key={items.id}>
                            <div className="flex-3">
                                <p className="poppins-bold ml-2">{items}</p>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const settingsWindow = WindowWrapper(Settings,'settings')
export default settingsWindow
