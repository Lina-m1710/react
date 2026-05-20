import React from 'react'
import MovieCard from './MovieCard/MovieCard'
import './style.css'

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="movieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}
