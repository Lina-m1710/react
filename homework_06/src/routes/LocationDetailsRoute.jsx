import React from 'react'
import { useLoaderData } from 'react-router'

export default function LocationDetailsRoute() {
  const location = useLoaderData()
  return (
    <>
      <h1>Location Details</h1>
      <h2>{location.name}</h2>
      <p>Address: {location.address}</p>
      <p>Type: {location.type}</p>
      <p>Rating: {location.rating}</p>
    </>
  )
}
