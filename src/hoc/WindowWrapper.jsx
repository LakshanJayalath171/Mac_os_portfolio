import React from 'react'
import useWindowStore from "../Store/WindowStore.js";

const WindowWrapper = (Component,windowKey) => {

    const wrapperd = (props)=>{
        const {focusWindow,windows} = useWindowStore();
        const {isOpen,zIndex} = windows[windowKey]
        const ref = useRef(null);

        return (<section id={windowKey} ref={ref} style={{zIndex}} className="absolute">
            <Component {...props}/>
        </section>)


    }

    wrapperd.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
    return wrapperd;
}
export default WindowWrapper
