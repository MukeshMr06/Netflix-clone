import React from 'react'
import './Home.css'
import Navebar from '../../Components/Navebar/Navebar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecard from '../../Components/TitleCard/Titlecard'
import Footer from '../../Components/Footer/Footer'




const Home = () => {
  return (
    <div className='home'>
      <Navebar />
     
      <div className="hero relative">
        <img src={hero_banner} alt="" className='banner-img w-full h-full'/>
        <div className="hero-caption absolute w-full top-40 bottom-0 px-6">
          <img src={hero_title} alt="" className='caption-img w-[90%] max-w-[420px] mb-6'/>
          <p className='max-w-[700px] text-xl mb-8'>Discovering his ties to a secret ancient order, a young man living inn modern Istanbul 
            embarks on a quest to save the city from an immortal enemy.</p>
           
            <div className="hero-btn flex gap-10 mb-10">
              <button className='border-0 outline-0 px-2 py-1 inline-flex items-center gap-5 font-bold text-black bg-white rounded cursor-pointer'><img className='w-[25px]' src={play_icon} alt="" />play</button>
              <button className='border-0 outline-0 px-2 py-1 inline-flex items-center gap-5 font-bold text-[#fff] bg-[#6d6d6eb3] rounded cursor-pointer'><img src={info_icon} alt="" className='w-[25px]'/>More info</button>
            </div>

            <Titlecard />
        </div>
      </div>
      <div className="more-card px-6">
        <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecard title={"Only on Netflix"} category={"popular"}/>
        <Titlecard title={"Upcoming"} category={"upcoming"}/>
        <Titlecard title={"Top pics for you"} category={"now_playing"}/>

      </div>

      <Footer />
    
    </div>
  )
}

export default Home