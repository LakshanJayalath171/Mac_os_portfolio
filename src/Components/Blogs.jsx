import React from 'react'
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import Sidebar from "./Sidebar.jsx";
import {projects, safari} from "../../assets/assest.js";
import {AiFillFolder} from "react-icons/ai";
import FolderCard from "./FolderCard.jsx";

const Projects = () => {
    return (
        <div className="w-[700px] h-[400px] rounded-3xl flex">
            <div className="mac flex-1 rounded-tl-[8px] rounded-bl-[8px]">
                <Sidebar target={"safari"}/>
            </div>
            <div className="flex-3 bg-blue-50 rounded-tr-[8px] rounded-br-[8px] w-full overflow-y-scroll">
                <div className="flex w-full">
                    <div className="mt-10 ml-10 mr-6 flex-1 ">
                        <img className="w-30 h-30" src={safari}/>
                    </div>
                    <div className="flex-2">
                        <h3 className="poppins-bold mt-10 ml-4 text-[25px] text-gray-600">My Projects</h3>
                        <p className="text-gray-400 ml-4">My projects and contributions</p>
                    </div>

                </div>

                <hr className="m-4"/>

                {/*projects section */}
                <div className="grid grid-cols-4">
                    {projects.map((items,index)=>(
                        <a href={items.githubLink} target="_blank">
                            <div className="mt-4"><FolderCard title={items.name}/></div>
                        </a>

                    ))}
                </div>
            </div>

        </div>
    )
}

const ProjectsWindow = WindowWrapper(Projects,"safari")
export default ProjectsWindow
