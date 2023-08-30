import React from 'react'
import NavBar from './NavBar'
import { Poppins } from 'next/font/google'
import Counter from './Counter'

const poppins = Poppins({
    subsets:["latin"],
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Hero() {
  return (
    <section className='bg-[#E6FFE1] w-screen h-screen relative min-h-screen'>
      <NavBar></NavBar>

    <div className='pad mt-8 xl:mt-2 2xl:mt-16'>
        <div className='w-full flex flex-col lg:flex-row items-center'>

            <div className='flex flex-col items-center lg:items-start justify-center lg:w-1/2'>
                <h1 style={poppins.style} className='text-4xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left'>Adelaida Correa Estrada</h1>
                <p className='lg:w-7/12 mt-4 text-center lg:text-left'>"Pensamos en el mañana, formamos con amor la niñez y juventud de hoy"</p>
                <button className='bg-[#FFE500] py-1 rounded-2xl border-2 border-black border-b-4 border-r-[3px] w-44 mt-5'>Get started</button>
            </div>

            <div className='text-center lg:w-1/2 py-8 pr-6 relative z-10'>
                <div className="absolute w-6/12 hero-img bg-[#FFE500] rounded-3xl top-12 left-1/2 -translate-x-1/2 lg:left-4 -z-10 border-2 border-b-4 border-r-4 border-black"></div>
                <img className='w-6/12 rounded-3xl z-20 hero-img mx-auto lg:mx-0' src="https://img.freepik.com/free-photo/medium-shot-smiley-girl-learning-english_23-2149455195.jpg?w=1380&t=st=1693345403~exp=1693346003~hmac=70b55fb61aa62185565518f2c4aa961a9294cd2df42f594257eae1c900a0472b" alt="" />
                
            </div>

        </div>

        
    </div>

      <Counter />
    </section>
  )
}
