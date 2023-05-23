import React from 'react';

import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {RiVuejsFill} from 'react-icons/ri';
import {FaAngular} from 'react-icons/fa';
import {FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {SiFlutter} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiMariadb} from 'react-icons/si'
import {FaDocker} from 'react-icons/fa'





const Skills = () => {
  return (
    <div name="skills" className='w-full md:h-screen bg-slate-800 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex flex-col max-w[1000px] justify-center items-center'>
                <div>
                    <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</h2>
                    <p className='py-4'>These are the tecnologie I've worked with</p>
                </div>
                <div className='grid  xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 gap-10 py-8 text-center mx-auto'>
                    <div className='shadow-md duration-500 hover:text-pink-600'><AiFillHtml5 size={100}/>HTML5</div>
                    <div className='shadow-md duration-500 hover:text-pink-600'><FaCss3Alt size={100}/>CSS3</div>
                    <div className='shadow-md duration-500 hover:text-pink-600'><SiJavascript size={100}/>Javascript</div>
                    <div className='shadow-md duration-500 hover:text-pink-600'><SiTypescript size={100}/>Typescript</div>
                    <div className='shadow-md duration-500 hover:text-pink-600'><IoLogoNodejs size={100}/>Node</div>
                    <div className='shadow-md duration-500 hover:text-pink-600'><FaReact size={100}/>React</div>
                    <div className='shadow-md duration-500'><SiRedux size={100}/>Redux</div>
                    <div className='shadow-md duration-500'><RiVuejsFill size={100}/>VueJs</div>
                    <div className='shadow-md duration-500'><FaAngular size={100}/>Angular</div>
                    <div className='shadow-md duration-500'><FaBootstrap size={100}/>Bootstrap</div>
                    <div className='shadow-md duration-500'><SiTailwindcss size={100}/>Tailwind</div>
                    <div className='shadow-md duration-500'><SiFlutter size={100}/>Fluetter</div>
                    <div className='shadow-md duration-500'><SiMongodb size={100}/>MongoDb</div>
                    <div className='shadow-md duration-500'><SiMariadb size={100}/>MariaDb</div>
                    <div className='shadow-md duration-500'><FaDocker size={100}/>Docker</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills