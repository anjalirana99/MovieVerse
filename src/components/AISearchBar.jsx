import React from 'react'

const AISearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center items-center'>
        <form className='bg-black p-2 w-1/2 grid grid-cols-12 rounded-2xl opacity-85' onSubmit={(e)=>e.preventDefault()}>
            <input className='bg-gray-200 p-2 m-4 rounded-lg col-span-9' type='text' placeholder='What would you like to watch today?'/>
            <button className='cursor-pointer bg-red-700 py-2 px-4 m-4 rounded-lg col-span-3 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default AISearchBar