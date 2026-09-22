// icons 

import background from "./Icons/background.jpg"
import wallpaper from "./Icons/wallpaper.png"
import contact from "./Icons/Contact.png"
import files from "./Icons/Files.png"
import Folder from "./Icons/Folder.png"
import photos from "./Icons/photos.png"
import safari from "./Icons/safari.png"
import setting from "./Icons/Settings.png"
import terminal from "./Icons/terminal.png"
import profile from "./Profile/photo_6309939572606963276_y.jpg"
import mode from "./Icons/mode.svg"
import share from "./Icons/share.svg"

export {background ,Folder,profile,mode,files,photos,setting,contact,share,safari}

//color vairents

const colorVariants = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    amber:"bg-amber-500",

};

// sidebar icons
import work from '../assets/Icons/work.svg'
import trash from '../assets/Icons/trash.svg'
import atom from '../assets/Icons/atom.svg'
import aboutMe from '../assets/Icons/info.svg'
import cv from "../assets/Icons/file.svg"

export const sidebarIcons = [
    {
        name:"Work",
        icon:work
    },
    {
        name:"Trash",
        icon:trash
    },
    {
        name:"Resume",
        icon:cv
    },
    {
        name:"About me",
        icon:aboutMe
    },

]

export const footerIcons = [
    {
        id:"contact",
        icon:contact,
        name:'Contact'
    },
    {
        id:"files",
        icon:files,
        name:"Archivements"
    },
    {
        id:"photos",
        icon: photos,
        name:"Certifications"
    },
    {
        id:"settings",
        icon:setting,
        name:"Profile"
    },
    {
        id:"safari",
        icon:safari,
        name:"Projects"
    },
    {
        id:"terminal",
        icon:terminal,
        name:"Terminal"
    }
]

// importing Skills icons 

import express from "./Icons/Express.png"

import html from "./Icons/html.png"
import java from "./Icons/java.png"
import js from "./Icons/JS.png"
import mongoDb from "./Icons/mongoDb.png"
import node from "./Icons/node.png"
import python from "./Icons/Python.png"
import ts from "./Icons/Ts.png"
import react from "./Icons/react.png"
import linux from "./Icons/Linux.png"
import gsap from "./Icons/Gsap.png"
import mui from "./Icons/Mui.png"
import tailwind from "./Icons/tailwind.png"
import daisyUi from "./Icons/Daisy UI.png"
import Github from "./Icons/Github.png"
import mysql from "./Icons/mysql.png"
import postman from "./Icons/postman.png"
import psql from "./Icons/PSql.png"
import vCode from "./Icons/vscode.png"

// certifications 

import frontEnd from "./Certifications/Front end development.PNG"
import c_introduction from "./Certifications/Intro to C.png"
import intro_java from "./Certifications/intro to java.png"
import intro_html from "./Certifications/intro to HTML.png"
import java_inter from "./Certifications/Java Intermediate.png"
import js_intermediate from "./Certifications/JS Intermediate.png"
import prompt_eng from "./Certifications/JS Intermediate.png"
import python_dev from "./Certifications/Pyhton Developer.png"
import python_beg from "./Certifications/Python For Begginers.PNG"
import webdesign_beginers from "./Certifications/web design for begginers.PNG"


// skills

export const softSkills = [
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Adaptability",
    "Time management",
    "Critical thinking",
    "Creativity",
]

// techncal skills 

export const programming_lang = [
    {
        id:1,
        name:"Python",
        icon:python
    },
    {
        id:2,
        name:"JAVA",
        icon:java
    },
    {
        id:3,
        name:"Java Script",
        icon:js
    },
    {
        id:4,
        name:"Type Script",
        icon:ts
    },
    {
        id:5,
        name:"HTML5",
        icon:html
    }
]
// front end frameworks

export const frontend_frameworks = [
    {
        id:1,
        name:"React",
        icon:react
    },
    {
        id:2,
        name:"Tailwind Css",
        icon:tailwind
    },
    {
        id:3,
        name:"Material UI",
        icon:mui
    },
    {
        id:4,
        name:"Web Animation With GSAP",
        icon:gsap
    },
    {
        id:5,
        name:"Daisy UI",
        icon:daisyUi
    },

]

//Backend frameworks

export const backend_frameworks = [
    {
        id:0,
        name:"Express JS",
        icon:express
    },
    {
        id:1,
        name:"Node JS",
        icon: node
    }
]

//Database management System

export const DBMS = [
    {
        id:1,
        name:"Mongo DB",
        icon:mongoDb
    },
    {
        id:2,
        name:"My SQL",
        icon:mysql
    },
    {
        id:3,
        name:"Poster SQL",
        icon:psql
    },

]

//Development Tools

export const dev_tools = [
    {
        id:1,
        name:"Vs Code",
        icon:vCode
    },
    {
        id:2,
        name:"Linux",
        icon:linux
    },
    {
        id:3,
        name:"Github",
        icon:Github
    },
    {
        id:4,
        name:"Postman",
        icon: postman
    }
]


// java certification

export const java_certificates = [
    {
        id:0,
        name:"Intoduction To JAVA Programming",
        Organization:"Sololearn",
        image:intro_java,
        is_date:"",
        color:colorVariants.blue,
    },
    {
        id:1,
        name:"JAVA Intermediate",
        Organization:"Sololearn",
        image:java_inter,
        is_date:"",
        color:colorVariants.purple,
    },
    
]

// Python certificate 

export const python_certificate =[
    {
        id:0,
        name:'Python For Begginers',
        Organization:"University Of Moratuwa",
        image:python_beg,
        is_date:"",
        color:colorVariants.red,
    },
    {
        id:1,
        name:"Python Developer",
        Organization:"Sololearn",
        image:python_dev,
        is_date:"",
        color:colorVariants.green,
    },
]

// AI 

export const Ai = [
    {
        id:0,
        name:"Prompt Engineering",
        Organization:"Sololearn",
        image:prompt_eng,
        is_date:"",
        color:colorVariants.amber,
    }
]

//web development certificate

export const web_dev_certificate= [
    {
        id:0,
        name:"Intoduction To HTML",
        Organization:"Sololearn",
        image:intro_html,
        is_date:"",
        color:colorVariants.red,
    },
    {
        id:1,
        name:"Web Design For Begginers",
        Organization:"University Of Moratuwa",
        image:webdesign_beginers,
        is_date:"",
        color:colorVariants.amber,
    },
    {
        id:2,
        name:"Front End Developer",
        Organization:"University Of Moratuwa",
        image:frontEnd,
        is_date:"",
        color:colorVariants.blue,
    }
]

//JS certificate

export const Js_certificate = [
    {
        id:0,
        name:"Java Script Intermediate",
        Organization:"Sololearn",
        image:js_intermediate,
        is_date:"",
        color:colorVariants.red,
    }
]

// C certificate 

export const c_certificate =[
    {
        id:0,
        name:"Introduction To C Programming",
        Organization:"Sololearn",
        image:c_introduction,
        color:colorVariants.amber,
    }
]

//Relevent courseworks

export const rel_courseworks = [
    "Data Structures And Algorothms",
    "Database Management",
    "Software Engineering",
    "Object-oriented Programming",
    "Web Development",
    "System Analysis & Design",
    "Computer Networking",
    "Ethical Hacking"
]


export const title_items = [
    "Finder",
    "Files",
    "Edit",
    "View",
    "Window",
    "Help"
]


// importing social icons
import facebook from "./Social icons/facebook.png"
import github from "./Social icons/github.png"
import instagram from "./Social icons/instagram.png"
import linkedin from "./Social icons/linkedin.png"
import threads from "./Social icons/threads.png"
import gmail from "./Social icons/gmail.png"
import resume from "./Social icons/resume.png"

export{github ,instagram,facebook,linkedin,threads,}

export const social = [
    {
        id:1,
        name:'LinkedIn',
        url:"https://www.linkedin.com/in/lakshan-jayalath-4b7b1931a/",
        image:linkedin
    },
    {
        id:2,
        name:"Threads",
        url:"https://www.threads.com/@lakshan16176?igshid=NTc4MTIwNjQ2YQ==",
        image:threads
    },
    {
        id:3,
        name:"Instagram",
        url:"https://www.instagram.com/lakshan16176?igsh=MThieGUyN2htMGFrdg%3D%3D&utm_source=qr",
        image:instagram
    },
    {
        id:4,
        name:"Github",
        url:"https://github.com/LakshanJayalath171",
        image:github
    },
    {
        id:5,
        name:"Email",
        url:"lakshanjayalath171@gmail.com",
        image:gmail,
    },
    {
        id:6,
        name: "Resume",
        url: "http://localhost",
        image:resume,
    }

]

//projects

export const projects = [
    {
        id:1,
        name:'LearnStack ',
        shortDescription:"Fullstack learning management system",
        techStack:"NextJS",
        technologies:[
            "NextJS",
            "Express Js",
            "MongoDB",
            "Tailwind CSS + Lucid Icons",
            "React Native",
            "Clerk Authentication",
            "Node.js",
            "Shadcn UI"
        ],
        status:"On going",
        description: "I created this project as my first SAAS start up. I created 50+ UI and in this project " +
            ". Teachers/ instructor can make a course and also they have a dashboard for track the details like " +
            "enrolled students, total revenue etc. Students can enroll course and pay to them with strip payment method" +
            "Students can see the details like enrolled courses, course progress , achivements and certification. After complete the " +
            "course students can earn certificate. I mainly use next js for this project." +
            "Tailwind css for the modern styles and lucide react for the icons. Authentication provide by the clerk. Node+" +
            "next js handle the backend and mongodb use as the database. I use react native + native wind for develop mobile app. ",
        liveDemo:'N/A',
        link:'',
    },
    {
        id:2,
        name:"MediLink",
        shortDescription:"Fullstack Doctor appointment booking system",
        techStack:"MERN Stack",
        technologies:[
            "React",
            "Tailwind CSS",
            "Express Js",
            "MongoDB",
            "Zustand",
            "Node. Js",
            "JWT + Bycrypt"
        ],
        status:"Finished",
        description: "MediLink is a full-stack doctor appointment booking system built using the MERN stack. The platform provides a seamless experience for patients to discover doctors, view doctor profiles, and book appointments online. Doctors can manage their profiles, schedules, and appointments through a dedicated dashboard.\n" +
            "\n" +
            "The frontend was developed with React and Tailwind CSS, while the backend is powered by Node.js, Express.js, and MongoDB. Zustand is used for efficient state management, and JWT with bcrypt provides secure authentication and password protection.\n" +
            "\n" +
            "The application includes 20+ responsive pages covering patient and doctor workflows, authentication, doctor management, appointment booking, dashboards, and other essential features.",
        liveDemo:'N/A',
        link:'https://github.com/LakshanJayalath171/MediLink---Healthcare-platform-',
    },
    {
        id:3,
        name:'Weather App',
        shortDescription:"Weather App",
        techStack:"React Native",
        technologies:[
            "React Native",
            "Native wind",
            "Open Metio API"
        ],
        status:"Finished",
        description: "A modern weather application built with React Native and NativeWind, powered by the Open-Meteo API. The app uses the user's current location to display real-time weather conditions, including temperature, feels-like temperature, humidity, wind speed, and weather conditions.\n" +
            "\n" +
            "Users can also search for locations and view current weather along with a 7-day forecast. The application features a clean, responsive interface with weather-specific visuals and a smooth mobile experience.\n",
        liveDemo:'N/A',
        link:'https://github.com/LakshanJayalath171/Weather_station_app',
    },
    {
        id:4,
        name:'Movie App',
        shortDescription:"",
        techStack:"React Native",
        technologies:[
            "React Native",
            "Native wind",
            "TMDB Database"
        ],
        status:"Finished",
        description: "",
        liveDemo: "N/A",
        link:'',
    },
    {
        id:2,
        name:"Animated Landing Page",
        techStack:'React + GSAP',
        description:"I created this project to understand how works web animation with GSAP library. I created the" +
            "gaming landing page with gsap plugin. The main force of this project is how works web animation. I use " +
            "scrolltrigger animations , basic GSAP animations like from and to , GSAP timeline animations.",
        githubLink:"https://github.com/LakshanJayalath171/Animated_landing_page",
        video:'video url'
    },
    {
        id:3,
        name:"Yotube Clone",
        techStack:'React',
        description:"I creted this project usin REACT and youtube API. Its gives a basic youtube features like waich" +
            "videos , like, comment , share count for video and also subscribers count of channels. UI inspipred by " +
            "YouTube application and main reason for create that project to understand react compoenent and basic hooks " +
            "like useState , useEffect. ",
        githubLink:"https://github.com/LakshanJayalath171/YouTube_Clone",
        video:'videourl'
    },
    {
        id:4,
        name:"Apple MacOS inspired portfolio",
        techStack:'React + GSAP',
        description:"I created a portfolio for showcase my works using React + GSAP. React created the UI and " +
            "added animations using GSAP library.",
        githubLink:"https://github.com/LakshanJayalath171/Mac_os_portfolio",
        video:'video url'
    },
    {
        id:5,
        name:"Spotify Clone",
        techStack:'React + Tailwind',
        description:"I created spotify clone with hard coded data to understand how Works React compoents, taiwind classes" +
            "and React Router Dom. Implemented all functions to play and pause songs and create playlists. UI inspired from spotify.",
        githubLink:"https://github.com/LakshanJayalath171/spotify_clone",
        video:'video url'
    }
]

// Achivements
export const AchivementsArray = [
    {
        id:1,
        name:"30 Days Of Code",
        org:"HackerRank",
        url:"https://github.com"
    },
    {
        id:2,
        name:"10 Days of JS",
        org:"HackerRank",
        url:"http://github.com"
    }
]