import React from 'react'
import Title from "./Components/Title.jsx";
import Taskbar from "./Components/Taskbar.jsx";
import Window from "./Components/Window.jsx";



const App = () => {
  return (
    <div>
      <div className=" relative min-h-screen min-w-screen bg-[url(assets/Icons/background.jpg)] bg-cover bg-center bg-no-repeat">
          <Title/>
          <div className="absolute bottom-0 left-[450px]">
              <Taskbar/>
          </div>
          <Window/>
      </div>
    </div>
  )
}

export default App