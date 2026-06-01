import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const initialForm = {
    title: '',
    tags: '',
    assigneeName: '',
    assigneeLevel: 'junior',
    isDone: false,
  }
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      title: form.title,
      tags: form.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      assignee: {
        name: form.assigneeName,
        level: form.assigneeLevel,
      },
      isDone: form.isDone,
    }

    onAdd(newTask)

    setForm(initialForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add task</h2>
      <br />
      <br />
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="tags"
        placeholder="react, hooks"
        value={form.tags}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="assigneeName"
        placeholder="Assignee name"
        value={form.assigneeName}
        onChange={handleChange}
      />
      <br />
      <br />
      <select
        name="assigneeLevel"
        value={form.assigneeLevel}
        onChange={handleChange}
      >
        <option value="junior">junior</option>
        <option value="middle">middle</option>
        <option value="senior">senior</option>
      </select>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          name="isDone"
          checked={form.isDone}
          onChange={handleChange}
        />
        Done
      </label>
      <br />
      <br />
      <button type="submit">Add task</button>
    </form>
  )
}
