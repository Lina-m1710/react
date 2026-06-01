import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (!tasks.length) {
    return <p>No tasks yet</p>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
