import React from 'react'
import useWindowStore from "../Store/WindowStore.js";

const WindowControls = ({target}) => {

    const { close_window: closeWindow } = useWindowStore();
    return (
        <div className='flex items-center gap-3 p-2'>
            <div className='bg-red-500 w-3 h-3 rounded-full close' onClick={()=>closeWindow(target)}/>
            <div className='bg-orange-500 w-3 h-3 rounded-full minimize' />
            <div className='bg-green-500 w-3 h-3 rounded-full maximize' />

        </div>
    )
}
export default WindowControls
