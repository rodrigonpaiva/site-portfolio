import React,{useState} from 'react'
import {FaBars, FaTimes, FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

    const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleCLick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-slate-200'>
        <div>
            <h1 className='text-3xl'>RodrigoPaiva</h1>
        </div>
        {/* menu */}
            <ul className='hidden md:flex '>
                <li className='border-b-2 border-slate-800 hover:border-b-2 hover:border-slate-200 duration-100'>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='border-b-2 border-slate-800 hover:border-b-2 hover:border-slate-200 duration-100'>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='border-b-2 border-slate-800 hover:border-b-2 hover:border-slate-200 duration-100'>
                    <Link to="skills" spy={true} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='border-b-2 border-slate-800 hover:border-b-2 hover:border-slate-200 duration-100'>
                    <Link to="work" spy={true} smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li className='border-b-2 border-slate-800 hover:border-b-2 hover:border-slate-200 duration-100'>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleCLick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-700'}>
            <li className='py-6 text-4xl hover:bg-slate-500'>
                <Link onClick={handleCLick} to="home" spy={true} smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl  hover:bg-slate-500'>
                <Link onClick={handleCLick} to="about" spy={true} smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl  hover:bg-slate-500'>
                <Link onClick={handleCLick} to="skills" spy={true} smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl  hover:bg-slate-500'>
                <Link onClick={handleCLick} to="works" spy={true} smooth={true} duration={500}>
                    Works
                </Link>
            </li>
            <li className='py-6 text-4xl  hover:bg-slate-500'>
                <Link onClick={handleCLick} to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons*/}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] bg-blue-900 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2' href=""> 
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2'href=""> 
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2'href=""> 
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] bg-[#6fc2b0] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2'href=""> 
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] bg-[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2'href=""> 
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar