import React, { useEffect, useRef, useState } from 'react';
import {
  Originals,
  popular,
  Adventure,
  Horror,
  comedy,
  suspense,
  past,
  Action,
  Romantic,
} from './Movielist';

const categories = [
  { title: 'Netflix Originals', movies: Originals, imageSizeLarge: 'h-64 w-56', imageSizeSmall: 'h-20 w-24' },
  { title: 'Popular on Netflix', movies: popular, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Released in the past year', movies: past, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Action movies', movies: Action, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Romantic movies', movies: Romantic, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Adventure movies', movies: Adventure, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Horror movies', movies: Horror, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Comedy movies', movies: comedy, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
  { title: 'Suspenseful movies', movies: suspense, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-20 w-24' },
];

const Titlecard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);  

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='w-full h-full pt-4 bg-[#181818]'>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1 className='text-xl capitalize mt-5 pl-5'>{category.title}</h1>

          <div className='flex gap-5 p-2 mt-2 scroll-hide-scrollbar'>
            {category.movies.map((movie, movieIndex) => (
              <img key={movieIndex} src={movie.img} alt='netflix original' 
              className={`object-cover ${windowWidth < 640 ? category.imageSizeSmall : category.imageSizeLarge} transition duration-200  ease-in transform hover:scale-105`} loading='lazy'/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default Titlecard;