import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

const [apiData,setApiData]= useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzAwYWIzZjhjMTgwODIwMmYzODVmYjJlY2MxOWQ2NiIsIm5iZiI6MTc1MjE1Mjk5OC44NzksInN1YiI6IjY4NmZiYmE2YmI2NGY3N2Y0NTcwM2Y1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-bUip3_P-mWeeXIa8ThIfdBs58Fx8WucTiv99EtIPc'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])



  return (
    <div className='player h-[100vh] flex flex-col items-center justify-center'>
      <img onClick={()=> {navigate(-2)}} src={backarrow} alt="" className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'
        frameborder="0" allowFullScreen className='rounded'></iframe>
      <div className="player-info flex justify-between items-center w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
    </div>
  )
}

export default Player