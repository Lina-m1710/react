import React from 'react'
import Button from './Button/Button'

export default function MovieCard({ movie, onSelectMovie }) {
  return (
    <li>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <Button onClick={() => onSelectMovie(movie)}>Select</Button>
    </li>
  )
}
