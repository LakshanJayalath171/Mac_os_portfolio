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

export {background ,Folder,profile,mode,files,photos,setting,contact,share}

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
import resume from '../assets/Icons/file.svg'
import aboutMe from '../assets/Icons/info.svg'

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
        icon:resume
    },
    {
        name:"About me",
        icon:aboutMe
    }
]

export const footerIcons = [
    {
        id:"contact",
        icon:contact
    },
    {
        id:"files",
        icon:files
    },
    {
        id:"photos",
        icon: photos
    },
    {
        id:"settings",
        icon:setting
    },
    {
        id:"safari",
        icon:safari
    },
    {
        id:"terminal",
        icon:terminal
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
    }

]

//projects

export const projects = [
    {
        id:1,
        name:"Realtime Chat Application",
        techStack:'MERN Stack',
        description:"I created the realtime chat application using MERN stack. UI created with the React framework" +
            "with type script. Node and Express run the backend and mongoDB gives the database support." +
            "Additionally i use Soket.io to implemet a realtime messaging feature. It gives the realtime chat messaging withou" +
            "refresh web browser.Also i use the bcryptJs for encrypt user password and use JWT(json web token).",
        githubLink:"http:localhost//3000",
        video:'video url'
    },
    {
        id:2,
        name:"Animated Landing Page",
        techStack:'React + GSAP',
        description:"I created this project to understand how works web animation with GSAP library. I created the" +
            "gaming landing page with gsap plugin. The main force of this project is how works web animation. I use " +
            "scrolltrigger animations , basic GSAP animations like from and to , GSAP timeline animations.",
        githubLink:"http:localhost//3000",
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
        githubLink:"http:localhost//3000",
        video:'videourl'
    },
    {
        id:4,
        name:"Apple MacOS inspired portfolio",
        techStack:'React + GSAP',
        description:"I created a portfolio for showcase my works using React + GSAP. React created the UI and " +
            "added animations using GSAP library.",
        githubLink:"http:localhost//3000",
        video:'video url'
    },
    {
        id:5,
        name:"Spotify Clone",
        techStack:'React + Tailwind',
        description:"I created spotify clone with hard coded data to understand how Works React compoents, taiwind classes" +
            "and React Router Dom. Implemented all functions to play and pause songs and create playlists. UI inspired from spotify.",
        githubLink:"http:localhost//3000",
        video:'video url'
    }
]