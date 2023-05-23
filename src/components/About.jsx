import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-800 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Sobre Mim
                    </p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Sou especializado em todas as etapas da produção cinematográfica, desde o 
                        desenvolvimento do conceito até a pós-produção. 
                        </p>
                    </div>
                    <div className='font-light'>
                        <p>Ao longo da minha carreira, tive a oportunidade de trabalhar em uma ampla gama de projetos,
                        incluindo filmes, documentários, videoclipes, comerciais e vídeos corporativos. 
                        Cada projeto é único e eu me empenho para entender as necessidades e visões de cada cliente, 
                        adaptando minha abordagem para oferecer resultados excepcionais.</p>

                        <p className='py-4'>Além de possuir habilidades técnicas sólidas, sou também um excelente contador de histórias. 
                        Acredito que a essência de um filme reside na sua capacidade de envolver o público e despertar 
                        emoções. Por isso, estou sempre em busca de narrativas poderosas e impactantes que possam fazer 
                        a diferença.</p>

                        <p>Se você está procurando um Filmmaker comprometido em transformar suas ideias em imagens 
                        cativantes e memoráveis, entre em contato comigo. Estou ansioso para colaborar com você e 
                        criar algo verdadeiramente especial. Juntos, podemos dar vida à sua visão cinematográfica e 
                        deixar uma marca duradoura no mundo audiovisual.</p>
                    </div>
                </div>
           
        </div>
    </div>
  )
}

export default About