import React, {useEffect, useState} from 'react'
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import Sidebar from "./Sidebar.jsx";
import {AchivementsArray, files} from "../../assets/assest.js";
import {Circle} from "rc-progress";
import { GiAchievement } from "react-icons/gi";

const Card = ({name,org})=>{
    return(
        <div className="w-48 m-4 h-32  flex items-center justify-center">
            <div>
                <GiAchievement size={80} color="gray" className="ml-4 mr-2"/>
                <h3 className="text-black poppins-bold">{name}</h3>
                <div className="flex w-full items-center justify-center">
                    <h5 className="text-gray-500 poppins-light">{org}</h5>
                </div>
            </div>
        </div>
    )
}

const Archivements = () => {
    const precentage = 60;
    const [value,setValue] = useState(10)

    useEffect(() => {
        if(value<precentage){
            const timer = setTimeout(()=>{
                setValue(value+1)
            },20);
            return()=>clearTimeout(timer)
        }
    }, [value]);
    return (
        <div className="w-[700px] h-[400px] mac rounded-[8px] flex">
            <div className="flex-1">
                <Sidebar target={'files'}/>
            </div>
            <div className="bg-blue-50 flex-2 w-full -h-full rounded-tr-[8px] rounded-br-[8px] p-3 overflow-y-scroll">
                {/*top area */}
                <div className="w-full flex p-8 gap-4">
                    <div className="">
                        <img src={files} className="w-18 h-18"/>
                    </div>
                    <div className="relative">
                        <h3 className="poppins-bold text-gray-600 text-2xl">Achivements</h3>
                        <p className="text-gray-500">This is my achivements</p>
                    </div>
                </div>

                <hr className="text-gray-600"/>

            {/*    details section*/}

                {/*Leetcode section*/}
                {/*<div className="w-full flex items-center justify-center p-4">*/}
                {/*    <div className="p-4">*/}
                {/*        <h3 className="poppins-bold text-gray-600">LeetCode</h3>*/}
                {/*        <Circle percent={value} strokeWidth={10} trailWidth={8} trailColor='gray' strokeColor="blue" className="m-3"/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3 className="text-gray-700">105 Problem Solved</h3>*/}

                {/*        <div className="p-5">*/}
                {/*            <div className="flex items-center justify-center">*/}
                {/*                <div className="w-3 h-3 bg-green-500 ml-3 mr-3 flex-1"></div>*/}
                {/*                <div className='flex-14'>*/}
                {/*                    <p className="text-black text-[10px]">30 Easy Problems Solved</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="flex items-center justify-center">*/}
                {/*                <div className="w-3 h-3 bg-yellow-500 ml-3 mr-3 flex-1"></div>*/}
                {/*                <div className="flex-14"><p className="text-black text-[10px]">30 Medium Problems Solved</p></div>*/}
                {/*            </div>*/}

                {/*            <div className="flex items-center justify-center">*/}
                {/*                <div className="w-3 h-3 bg-red-500 ml-3 mr-3 flex-1"></div>*/}
                {/*                <div className='flex-14'>*/}
                {/*                    <p className="text-black text-[10px]">30 Hard Problems Solved</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            {/*    hackerrank section*/}
                <div className="w-full  p-4">
                    <div className="p-4 flex-1">
                        <h3 className="poppins-bold text-gray-600">HackerRank</h3>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <div className="grid grid-cols-2">
                            {AchivementsArray.map((items,index)=>(
                                <Card name={items.name} org={items.org}/>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

const archivementsWindow = WindowWrapper(Archivements,"files")
export default archivementsWindow
