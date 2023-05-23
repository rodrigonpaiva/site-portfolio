import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-800 text-white'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-light'>Opa, me chamo</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rodrigo Paiva</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou um Filmaker.</h2>
            <p className='font-light text-[#8892b0] py-4 max-w-[800px]'>Sou um Filmmaker altamente experiente e apaixonado por contar histórias através da arte cinematográfica. 
            Com um olhar criativo e uma mente inovadora, busco capturar momentos autênticos e emocionantes que toquem 
            o coração do público.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <Link to="work" spy={true} smooth={true} duration={500}>
                        Meus Trabalho 
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Home