import React from 'react'
import './Home.css'
import MovieList from './MovieList'

const Home = () => {
  return (
    <div>
      <i><h1 className='title'>My Movies</h1></i>
      <div>
      <MovieList/> 
       </div>
    </div>
  )
}

export default Home

