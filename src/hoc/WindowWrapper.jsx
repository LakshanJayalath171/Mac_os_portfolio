import React, { useRef } from "react";
import useWindowStore from "../Store/WindowStore.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable, useGSAP);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        const ref = useRef(null);
        const dragRef = useRef(null); // ✅ store draggable instance

        // ✅ ANIMATION
        useGSAP(
            () => {
                const el = ref.current;
                if (!el || !isOpen) return;

                gsap.from(el, {
                    scale: 0.85,
                    opacity: 0,
                    y: 50,
                    duration: 0.4,
                    ease: "power3.out",
                });
            },
            { dependencies: [isOpen] }
        );

        // ✅ DRAGGABLE
        useGSAP(
            () => {
                const el = ref.current;
                if (!el || !isOpen) return;

                // kill previous instance
                if (dragRef.current) {
                    dragRef.current.kill();
                }

                // delay ensures DOM ready
                gsap.delayedCall(0, () => {
                    dragRef.current = Draggable.create(el, {
                        type: "x,y",
                        bounds: window,
                        cursor:'default',
                        activeCursor:'default',
                        onPress: () => focusWindow(windowKey),
                    })[0];
                });

                return () => {
                    if (dragRef.current) {
                        dragRef.current.kill();
                        dragRef.current = null;
                    }
                };
            },
            { dependencies: [isOpen] }
        );

        if (!isOpen) return null;

        return (
            <section
                ref={ref}
                style={{ zIndex }}
                className="absolute top-20 left-20 will-change-transform cursor-grab active:cursor-grabbing"
            >
                <Component {...props} />
            </section>
        );
    };

    return Wrapped;
};

export default WindowWrapper;