import React from 'react'
import { Link, useLoaderData } from 'react-router'

export default function MapRoute() {
  const locations = useLoaderData()
  return (
    <>
      <h1>Map</h1>
      {locations.map((location) => (
        <div key={location.id}>
          <h2>{location.name}</h2>
          <p>Address: {location.address}</p>
          <p>Type: {location.type}</p>
          <Link to={`/dashboard/location/${location.id}`}>View details</Link>
        </div>
      ))}
    </>
  )
}
