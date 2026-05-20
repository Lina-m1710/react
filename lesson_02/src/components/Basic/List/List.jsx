import React from 'react'
import ListItem from './ListItem'
import './style.css'

export default function List({ list = [], color, borderRadius, onItemClick }) {
  return list.length ? (
    <ul className="list" style={{ color: color, borderRadius: borderRadius }}>
      {list.map(({ id, value }) => (
        <ListItem
          key={id}
          id={id}
          value={value}
          onItemClick={() => onItemClick(id)}
        />
      ))}
    </ul>
  ) : null
}
