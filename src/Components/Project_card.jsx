import React from 'react'

const ProjectCard = ({name,shortDescription,techStack,technologies,description,status,liveDemo,link}) => {
    return (
        <div className="p-3" key={name}>
            <div>
                <div className="flex items-center justify-start gap-2">
                    <h1 className="text-2xl text-black poppins-bold">{name}</h1>
                    <div className="flex items-center justify-start">
                        {status ==="ongoing" ? <div className="bg-green-500/40 px-4 py-1 rounded-2xl text-xs">ongoing</div>:<div className="bg-blue-500/40 px-4 py-1 rounded-2xl text-xs">finished</div>}
                    </div>
                </div>
                <p className="text-black/60 text-xs poppins-light">{shortDescription}</p>

                <div className="mt-4">
                    <div>
                        <p className="text-black poppins-bold text-xs">{techStack}</p>
                        <div className="flex items-center justify-start gap-3 mt-1">
                            {technologies.map((items,index)=>(
                                <div key={index} className="w-full h-full bg-blue-500/40 rounded-2xl px-4 poppins-light flex">{items}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-start mt-4 gap-8">
                    <div className="text-center cursor-pointer">
                        <div className="flex items-center justify-center">
                            <img src="/assets/Social icons/github.png" className="w-5 h-5"/>
                        </div>
                        <a href={link}>
                            <p className="text-black  text-xs font-light">Github Link</p>
                        </a>

                    </div>
                    <div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <img src={"/assets/Social icons/demo.png"} className="w-5 h-5"/>
                        </div>
                        <a href={liveDemo}>
                            <p className="text-black text-xs font-light">Live Demo</p>
                        </a>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="mt-10 ">
                    <h2 className="text-2xl poppins-semibold">Description</h2>
                    <p className="text-black/80 poppins-light mt-2">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard
