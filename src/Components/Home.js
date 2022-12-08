import React from 'react'
import './Home.css'
import MovieList from './MovieList'

const Home = () => {
  return (
    <div>
      <h1 className='title'>My Movies</h1>
      <div>
      <MovieList/> 
       </div>
    </div>
  )
}

export default Home

