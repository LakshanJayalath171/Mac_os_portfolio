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

gsap.registerPlugin(Draggable)

const App = () => {

  return (
    <div>
      <div className=" relative min-h-screen min-w-screen bg-[url(assets/Icons/wallpaper.png)] bg-cover inset-0 z-0">
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