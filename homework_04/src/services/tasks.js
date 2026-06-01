export const API = 'https://6a05e129aa826ca75c0ac6a0.mockapi.io/todos'

export const fetchTasks = async () => {
  const res = await fetch(API)
  if (!res.ok) throw new Error(`Failed to add task`)
  const data = await res.json()
  return data
}

export const promiseTasks = fetchTasks()
