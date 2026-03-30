import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHT = {
    subtitle: { min: 300, max: 800, default: 300 },
    title: { min: 400, max: 900, default: 400 }
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{
                "--wght": baseWeight,
                fontVariationSettings: "'wght' var(--wght)"
            }}
        >
      {char === " " ? '\u00A0' : char}
    </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            "--wght": weight,
            overwrite: "auto"
        });
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const rect = letter.getBoundingClientRect();
            const center = rect.left - left + rect.width / 2;

            const distance = Math.abs(mouseX - center);
            const intensity = Math.exp(-(distance ** 2) / 6000);

            const weight = min + (max - min) * intensity;

            animateLetter(letter, weight);
        });
    };

    const handleMouseLeave = () =>
        letters.forEach((letter) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            titleCleanup && titleCleanup();
            subtitleCleanup && subtitleCleanup();
        };
    }, []);

    return (
        <section id="welcome" style={{ fontFamily: "Inter" }}>
            <h4 ref={subtitleRef} className="">
                {renderText("I'm Lakshan. Welcome to my", "text-blue-50 cursor-pointer", 400)}
            </h4>

            <h3
                ref={titleRef}
                className=""
            >
                {renderText("Portfolio", "text-8xl text-blue-50 cursor-pointer mt-3", 400)}
            </h3>
        </section>
    );
};

export default Welcome;