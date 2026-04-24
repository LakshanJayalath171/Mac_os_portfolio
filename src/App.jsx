import React from 'react'
import Title from "./Components/Title.jsx";
import Taskbar from "./Components/Taskbar.jsx";

import {Draggable} from "gsap/Draggable";
import gsap from 'gsap'
import Welcome from "./Components/Welcome.jsx";
import windowWrapper from "./hoc/WindowWrapper.jsx";
import Contact from "./Components/Contact.jsx";
import Settings from "./Components/Settings.jsx";
import Photos from "./Components/Photos.jsx";
import Terminal from "./Components/Terminal.jsx";
import Archivements from "./Components/Archivements.jsx";
import Blogs from "./Components/Blogs.jsx";

import wallpaper from "../assets/Icons/wallpaper.png"

import  {useEffect, useState} from 'react'
import { FaApple } from "react-icons/fa";
import {Line} from "rc-progress";

gsap.registerPlugin(Draggable)

const App = () => {

    const precentage = 100;
    const [value,setValue] = useState(0)

    useEffect(() => {
        if(value<60){
            const timer = setTimeout(()=>{
                setValue(prev => prev+1)
            },50)
            return ()=>clearTimeout(timer);
        }
        else if(value>=60 && value<precentage){
            const timer = setTimeout(()=>{
                setValue(prev => prev+1)
            },90)
            return ()=> clearTimeout(timer)
        }

    }, [value]);

  return (
    <div>

      <div className="relative min-h-screen min-w-screen  bg-cover inset-0 z-0" style={{backgroundImage: `url(${wallpaper})`}}>

          <div className={`absolute top-0 left-0 z-50 ${value == 100 ? "hidden":""}`}>
              <div className="w-screen h-screen bg-black flex items-center justify-center">
                  <div>
                      <div className="w-full flex items-center justify-center"><FaApple  className="text-white" size={80}/></div>
                      <Line percent={value} className="mt-8 w-64" strokeColor={"#ffffff"} strokeWidth={2} trailColor="#374151" trailWidth={2}/>
                  </div>
              </div>
          </div>
          <Title/>
          <div className="absolute bottom-0 left-[450px]">
              <Taskbar/>
          </div>

          <div className="absolute items-center justify-center top-1/2 right-[100px] z-10">
             <Welcome/>
          </div>

          <div>
              <Contact/>
              <Settings/>

          </div>

          <div>
              <Photos/>
          </div>

          <div>
              <Terminal/>
          </div>

          <div>
              <Archivements/>
          </div>

          <div>
              <Blogs/>
          </div>

      </div>
    </div>
  )
}

export default App