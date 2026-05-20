import React from 'react'

export default function MovieDetails({ selectedMovie }) {
  if (selectedMovie === null) {
    return null
  }
  return (
    <div>
      <h2>Selected Movie</h2>
      <p>Title: {selectedMovie.title}</p>
      <p>Year: {selectedMovie.year}</p>
      <p>Genre: {selectedMovie.genre}</p>
      <p>Rating: {selectedMovie.rating}</p>
    </div>
  )
}
