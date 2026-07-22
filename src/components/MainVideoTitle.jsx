import React from 'react'

const MainVideoTitle = ({title, overview}) => {
  const PLAY_ICN = (<svg viewBox="0 0 16 16" width="16" height="16" data-icon="PlaySmall" data-icon-id=":rf:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="black" d="M3.5 2.16c0-.51.56-.83 1-.58l10.01 5.84c.44.26.44.9 0 1.16l-10 5.84a.67.67 0 0 1-1.01-.58z"></path></svg>)
  return (
    <div className="absolute inset-0 px-10 md:px-20 pt-24 md:pt-0 flex flex-col justify-center bg-linear-to-r from-black text-white">
        <h1 className=' text-2xl md:text-6xl font-bold p-2'>{title}</h1>
        <p className='hidden md:block p-3 w-3/12'>{overview}</p>
        <div className='flex gap-5'>
            <button className='py-1 px-4 md:py-3 md:px-8 md:w-40 bg-gray-500 hover:opacity-80 text-lg rounded-3xl cursor-pointer'> 
              <div className='flex items-center gap-2 justify-center'>
                {PLAY_ICN}
                <span>Play</span>
              </div>
              
            </button>
            <button className='hidden md:block py-3 px-8 w-40 bg-gray-500 hover:opacity-80 text-lg rounded-3xl cursor-pointer'>More Info</button>
        </div>
    </div>
  )
}

export default MainVideoTitle