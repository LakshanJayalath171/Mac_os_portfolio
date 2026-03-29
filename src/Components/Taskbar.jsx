import React, { useRef } from "react";
import { footerIcons } from "../../assets/assest.js";
import useWindowStore from "../Store/WindowStore.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {Tooltip} from "react-tooltip";

gsap.registerPlugin(useGSAP);

const Taskbar = () => {
    const dockRef = useRef(null);

    useGSAP(
        () => {
            const dock = dockRef.current;
            if (!dock) return;

            // ✅ use GSAP selector (IMPORTANT)
            const icons = gsap.utils.toArray(".dock-icon");

            // ✅ set transform origin (important for scale)
            gsap.set(icons, { transformOrigin: "center bottom" });

            const animateIcons = (mouseX) => {
                icons.forEach((icon) => {
                    const rect = icon.getBoundingClientRect();
                    const center = rect.left + rect.width / 2;

                    const distance = Math.abs(mouseX - center);
                    const intensity = Math.exp(-(distance ** 2) / 20000);

                    gsap.to(icon, {
                        scale: 1 + 0.5 * intensity, // 🔥 stronger effect
                        y: -20 * intensity,
                        duration: 0.2,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                });
            };

            const handleMouseMove = (e) => {
                animateIcons(e.clientX);
            };

            const resetIcons = () => {
                gsap.to(icons, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            dock.addEventListener("mousemove", handleMouseMove);
            dock.addEventListener("mouseleave", resetIcons);

            return () => {
                dock.removeEventListener("mousemove", handleMouseMove);
                dock.removeEventListener("mouseleave", resetIcons);
            };
        },
        { scope: dockRef } // ✅ THIS IS CRITICAL
    );

    const { windows, open_window, close_window } = useWindowStore();

    const toggleApp = (app) => {
        const win = windows[app.id];

        if (win && win.isOpen) {
            close_window(app.id);
        } else {
            open_window(app.id);
        }
    };

    return (
        <div
            ref={dockRef}
            className="mac flex items-center justify-center gap-4 w-full rounded-2xl p-3"
        >
            {footerIcons.map((items) => (
                <div key={items.id}>
                    <img
                        onClick={() => toggleApp(items)}
                        className="w-12 h-12 cursor-pointer dock-icon will-change-transform"
                        src={items.icon}
                        alt=""
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={items.id}
                    />
                </div>
            ))}
            <Tooltip id="my-tooltip" place="top" className="tooltip" style={{ zIndex: 9999 }}/>
        </div>
    );
};

export default Taskbar;