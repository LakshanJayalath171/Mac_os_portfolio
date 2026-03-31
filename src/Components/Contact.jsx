import React, {useState} from 'react'
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import {
    footerIcons,
    contact,
    profile, instagram,
} from "../../assets/assest.js";
import {social} from "../../assets/assest.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WindowWrapper from "../hoc/WindowWrapper.jsx";


const Contact = () => {

    const [pannel,setpannel] = useState(1);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "96614379-9470-4cf6-aeff-e09dcccb9291");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        <div className='mac flex relative h-[400px] w-[700px] rounded-[8px]'>
            {/*first division */}
            <div className="flex-1 rounded-2xl">

                {/*Controls in upper section*/}
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

                    {/*Mapped items from the array */}
                    <div className="text-left mt-5">

                        {social.map((items,index)=>(
                            <div onClick={()=>setpannel(items.id)} className="p-2 pt-1 pb-0 flex items-start gap-2 cursor-pointer" key={index}>
                                <img className="w-5 h-5" src={items.image}/><p className="text-shadow-black font-semibold text-[15px] poppins-bold">{items.name}</p>

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

                {/*upper icons for share and previous page */}
                <div className="flex justify-between ga-10">
                    <ArrowBackIosIcon className="text-gray-500" sx={{ fontSize: 20 }}/>
                    <IosShareIcon className="text-gray-500 " sx={{ fontSize: 20 }}/>
                </div>

                {/*Hero section */}
                <div className="p-3 pt-5 flex items-start">
                    <img src={contact} className="w-20 h-20 "/>

                    <div className=" pl-5">
                        <h1 className="font-bold text-3xl text-shadow-white poppins-extrabold">Contact</h1>
                        <h4 className="font-semibold text-gray-800 poppins-bold opacity-75">Contact Me. Let's Create Together</h4>
                    </div>
                </div>
                <hr className="text-gray-500 "/>


                {/*Contact down section */}

                <div className="w-full h-full p-2">


                    {social.map((items,index)=>(
                        <div className={pannel==items.id?"":"hidden"}>
                            <h2 className="poppins-extrabold text-2xl">{items.name}</h2>
                            <div className="mac rounded-2xl m-2 flex p-3">
                                <div className="flex-1">
                                    <img src={items.image} className='w-25 h-25'/>
                                </div>

                                <div className={`p-3 ${pannel==5?"hidden":""}`}>
                                    <h2 className="text-gray-800 poppins-bold text-[18px]">Name</h2>
                                    <button className="px-7 py-2 rounded-full bg-blue-600"><a href={items.url}>Explore</a> <ArrowDropUpIcon/></button>
                                </div>

                                {/*Gmail section */}
                                <div className={`${pannel==5?"":"hidden"} w-50` }>
                                    <form onSubmit={onSubmit} className="flex flex-col">
                                        <input className="mac-input placeholder:poppins-bold placeholder:font-bold" placeholder="Your Name" type="text" name="name" required/>
                                        <input className="mac-input placeholder:font-bold" type="email" placeholder="Your Email" name="email" required/>
                                        <textarea className="mac-input placeholder:font-bold" placeholder="Message" name="message" required></textarea>
                                        <button className="bg-blue-600 m-2 p-2 rounded-full" type="submit">Submit Form <ArrowDropUpIcon/> </button>
                                        <span className="poppins-bold text-gray-800">{result}</span>
                                    </form>
                                </div>
                            </div>




                        </div>


                    ))}
                </div>

            </div>
        </div>
    )
}

const ContactWindow = WindowWrapper(Contact,"contact")

export default ContactWindow
