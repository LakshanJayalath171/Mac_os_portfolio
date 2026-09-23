import React from 'react'

const ProjectCard = ({name,shortDescription,techStack,technologies,description,status,liveDemo,link}) => {
    return (
        <div className="p-3" key={name}>
            <div>
                <h1 className="text-2xl text-black font-bold">LearnStack LMS</h1>
                <p className="text-black/60 text-xs font-semibold">Full Stack Lerning management system</p>

                <div className="mt-4">
                    <div>
                        <p className="text-black font-bold text-xs">MERN Stack</p>
                        <div className="flex items-center justify-start gap-3">
                            <div className="bg-blue-500/40 rounded-2xl px-4 ">React</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-start mt-4 gap-2">
                    <div className="text-center cursor-pointer">
                        <div className="flex items-center justify-center">
                            <img src="/assets/Social icons/github.png" className="w-5 h-5"/>
                        </div>
                        <p className="text-black  text-xs font-light">Github Link</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <img src={"/assets/Social icons/demo.png"} className="w-5 h-5"/>
                        </div>
                        <p className="text-black text-xs font-light">Live Demo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard
