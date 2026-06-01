import { use, useState } from 'react'
import { promiseTasks, API } from '../../services/tasks'
import { useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

export default function TaskBoard() {
  const initialTasks = use(promiseTasks)
  const [tasks, setTasks] = useState(initialTasks)

  const handleAddTask = async (newTaskData) => {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
      })

      if (!res.ok) {
        throw new Error('Failed to add task')
      }

      const newTask = await res.json()

      setTasks((prev) => [...prev, newTask])
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleUpdateTask = async (id, updatedTaskData) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskData),
      })

      if (!res.ok) {
        throw new Error('Failed to update task')
      }

      const updatedTask = await res.json()

      setTasks((prev) =>
        prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('Failed to delete task')
      }

      setTasks((prev) => prev.filter((task) => task.id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </>
  )
}
