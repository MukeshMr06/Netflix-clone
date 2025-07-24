import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer max-w-[1000px]'>
   
      <div className="footer-icon">
        <img src={facebook_icon} alt="" className='w-[25px] h-[25px] cursor-pointer'/>
        <img src={twitter_icon} alt="" className='w-[25px] h-[25px] cursor-pointer'/>
        <img src={instagram_icon} alt="" className='w-[25px] h-[25px] cursor-pointer'/>
        <img src={youtube_icon} alt="" className='w-[25px] h-[25px] cursor-pointer'/>
  </div>

      <ul className='grid grid-cols-2 mt-4 mb-6 md:grid-cols-4 '>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporatee Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copy-text text-gray-200 '>&copy; 1997-2025 Netflix,Inc.</p>
    </div>
  

  )
}

export default Footer