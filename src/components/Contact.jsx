import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className=' flex w-full h-screen justify-center items-center bg-slate-800 text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
         {/* Container */}
         <div className='flex flex-col max-w[1000px] justify-center items-center'>
            <div>
                <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Fale Conosco</h2>
                <p className='py-4'>Aqui voce ve um pouco dos trabalho que ja produzir com todo amor.</p>
            </div>
            <form className='flex flex-col w-full text-slate-800' method='POST' action="https://getform.io/f/26838b1e-5237-467f-a23e-bff26078f068">
              <input className='p-2' type="text" placeholder='Name' name='name' />  
              <input className='my-4 p-2 ' type="text" placeholder='Email' name='email' />
              <textarea className='p-2 ' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact