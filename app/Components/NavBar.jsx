import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex items-center justify-between bg-[#B4D8AE] px-4 md:px-8 lg:px-14 xl:px-16 2xl:px-28 py-2 lg:py-4 xl:py-5 2xl:py-7'>
        {/* adelaida logo */}
        <div className='w-4/12'>
            logo
        </div>
        <div className='w-4/12'>
            <ul className='flex items-center gap-4'>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
            </ul>
        </div>
        <div className='w-4/12 flex flex-col items-center'>            
            <button className='bg-[#FFE500] py-1 rounded-2xl border border-black border-b-[3px] border-r-2 w-24'>Log in</button>
        </div>
    </nav>
  )
}
