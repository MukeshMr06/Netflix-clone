import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecard = ({ title, category }) => {

  const [apiData,setApiData] = useState([])
  const cardref = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzAwYWIzZjhjMTgwODIwMmYzODVmYjJlY2MxOWQ2NiIsIm5iZiI6MTc1MjE1Mjk5OC44NzksInN1YiI6IjY4NmZiYmE2YmI2NGY3N2Y0NTcwM2Y1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-bUip3_P-mWeeXIa8ThIfdBs58Fx8WucTiv99EtIPc'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault();
    cardref.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardref.current.addEventListener('wheel', handleWheel);
  }, [])


  return (
    <div className='title-card w-full'>
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div
        className="card-list flex gap-4 mt-6 overflow-x-auto scroll-smooth"
        ref={cardref}
      >
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card min-w-[250px] max-w-[300px]" key={index}>
            <img className="w-full h-auto rounded-lg" src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <p className="text-white mt-2">{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Titlecard