import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-violet-900 text-white py-2'>
        <div className="logo">
        < span className = 'font-bold text-xl mx-9' > Todo</span >  
 </div >
 <ul className='mx-9 flex gap-5'>
            <li className='cursor-pointer hover:font-bold transition-all '>HOME</li>
            <li className='cursor-pointer hover:font-bold transition-all '>YOUR TASKS</li>
        </ul>
   
    </nav >
  )
}

export default Navbar
