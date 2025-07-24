import React, { useEffect, useRef } from 'react'
import './Navebar.css'
import logo from '../../assets/logo.png'
import Search from '../../assets/Search_icon.svg'
import Bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'



const Navebar = () => {

const navRef = useRef();

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY >=80){
      navRef.current.classList.add('nav-dark')
    }
    else{
       navRef.current.classList.remove('nav-dark')
    }
  })
},[])

  return (
    <div ref={navRef} className='navebar w-full px-8 flex justify-between fixed z-1 '>
      <div className="navebar-left md:flex items-center gap-10 my-8">
        <img src={logo} alt="" className='w-25 md:w-30'/>

        <ul className='hidden md:flex gap-10 cursor-pointer list-none'>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>

      </div>

      <div className="navebar-right flex gap-10 items-center">
        <img src={Search} alt="" className='w-4 cursor-pointer'/>
        <p>children</p>
        <img src={Bell} alt="" className='w-4 cursor-pointer'/>

        <div className="navebar-profile flex items-center gap-3 cursor-pointer relative">
          <img src={profile} alt="" className='profile rounded w-6' />
          <img src={caret} alt="" className='w-4'/>
          <div className="dropdown px-2 py-1 hidden">
            <p onClick={()=> {logout()}} className='cursor-pointer'>Sign out of Netflix</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Navebar