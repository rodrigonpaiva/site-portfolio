import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-slate-800 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>    
            {/* Container */}
            <div className='flex flex-col max-w[1000px] justify-center items-center'>
                <div>
                    <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Trabalhos</h2>
                    <p className='pt-8'>Aqui voce ve um pouco dos trabalho que ja produzir com todo amor.</p>
                </div>

                <div className='grid md:grid-cols-2 gap-8 px-4 py-8'>
                    <div className='py-4'>
                        <div className='pb-8'>
                            <iframe  className='w-96 h-56' src="https://www.youtube.com/embed/qnkuBUAwfe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe className='w-96 h-56' src="https://www.youtube.com/embed/qnkuBUAwfe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='pb-8'>
                            <iframe className='w-96 h-56' src="https://www.youtube.com/embed/qnkuBUAwfe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe className='w-96 h-56' src="https://www.youtube.com/embed/qnkuBUAwfe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work