import React from "react";
import { footerIcons } from "../../assets/assest.js";
import useWindowStore from "../Store/WindowStore.js";

const Taskbar = () => {

    const { windows, open_window, close_window } = useWindowStore();

    const toggleApp = (app) => {
        const win = windows[app.id];

        if (win.isOpen) {
            close_window(app.id);
        } else {
            open_window(app.id);
        }

        console.log(windows);
    };

    return (
        <div className="mac flex items-center justify-between gap-2 w-full rounded-2xl p-3">
            {footerIcons.map((items, index) => (
                <div key={index}>
                    <img
                        onClick={() => toggleApp(items)}
                        className="w-12 h-12 cursor-pointer transition hover:scale-125"
                        src={items.icon}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};

export default Taskbar;