import React, {useState} from 'react'
import {share, social} from "../../assets/assest.js";

import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import {MdOutlineLaptopMac} from "react-icons/md";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Contact = () => {

    const [toggle ,setToggle] = useState(false)

    const [pannel,setpannel] = useState(1);
    const [result, setResult] = useState("");

    console.log(toggle)
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
        <div className={`mac flex relative h-[400px] w-[700px] rounded-[8px]`}>

            {/*First division */}
            <div className={`flex-1 ml-2 mr-2 ${toggle == false?"":"hidden"}`} >
                <div className="flex justify-between">
                    <WindowControls target="contact"/>
                    <img src={share} alt="Share"/>
                </div>


                <div className="flex grid grid-cols-3 ">
                    {social.map((items,index)=>(
                        <div className="items-center" onClick={()=>setpannel(items.id)}>
                            {console.log(pannel)}
                            <img src={items.image} className="w-24 h-24 m-4 "/>
                            <div className="flex items-center justify-center">
                                <p className="text-[12px] text-gray-600">{items.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/*second division */}
            <div className="flex-1 bg-blue-50 rounded-tr-[8px] rounded-br-[8px] overflow-y-scroll relative">
                <div className="p-1 w-[10px] h-[10px] cursor-pointer" onClick={()=>setToggle(!toggle)}>
                    {toggle? <ArrowForwardIosIcon className="text-gray-600"/>:<ArrowBackIosNewIcon className="text-gray-600"/>}

                </div>
                <div className="items-center justify-center">
                    {social.map((items,index)=>(
                        <div className={`${pannel == items.id ? "":"hidden"}`}>
                           <div className="flex w-full items-center justify-center">
                               <img src={items.image} className="w-36 h-36"/>


                           </div>

                            <div className="flex w-full items-center justify-center">
                                <h2 className="text-gray-600 poppins-bold text-3xl">{items.name}</h2>

                            </div>

                            <div className="m-3">
                                <div className={`${pannel==5?"":"hidden"} w-50` }>
                                    <form onSubmit={onSubmit} className="flex flex-col">
                                        <input className="mac-input placeholder:poppins-bold placeholder:font-bold" placeholder="Your Name" type="text" name="name" required/>
                                        <input className="mac-input placeholder:font-bold" type="email" placeholder="Your Email" name="email" required/>
                                        <textarea className="mac-input placeholder:font-bold" placeholder="Message" name="message" required></textarea>
                                        <button className="bg-blue-600 m-2 p-2 rounded-full" type="submit">Submit Form </button>
                                        <span className="poppins-bold text-gray-800">{result}</span>
                                    </form>
                                </div>

                                <div className={`${pannel==6?"":"hidden"}`}>
                                    <iframe src="assets/CV/Lakshan jayalathCV.pdf" height={`${toggle ? "700px":""}`} width={`${toggle? "650px":""}`} />
                                </div>

                                <div className={`flex w-full items-center justify-center ${pannel == 5 || pannel== 6? "hidden":""}`}>
                                    <button className="w-24 h-10 rounded-3xl bg-blue-600"><a href={items.url}>Connect</a></button>
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
