import { useState } from 'react'

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [title, setTitle] = useState(task.title)
  const [tags, setTags] = useState(task.tags.join(', '))
  const [assigneeName, setAssigneeName] = useState(task.assignee.name)
  const [assigneeLevel, setAssigneeLevel] = useState(task.assignee.level)
  const [isDone, setIsDone] = useState(task.isDone)

  const handleSave = () => {
    const updatedTask = {
      title,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      assignee: {
        name: assigneeName,
        level: assigneeLevel,
      },
      isDone,
    }

    onUpdate(task.id, updatedTask)
  }

  return (
    <li>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input
        type="text"
        value={assigneeName}
        onChange={(e) => setAssigneeName(e.target.value)}
      />

      <select
        value={assigneeLevel}
        onChange={(e) => setAssigneeLevel(e.target.value)}
      >
        <option value="junior">junior</option>
        <option value="middle">middle</option>
        <option value="senior">senior</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        Done
      </label>

      <button type="button" onClick={handleSave}>
        Save
      </button>

      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  )
}
