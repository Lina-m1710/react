import { useEffect, useState } from 'react'

export default function DeletionTimer({ setIsActive }) {
  const [list, setList] = useState([
    'Fix login bug',
    'Write unit tests',
    'Code review PR#12',
    'Update README',
    'Deploy to staging',
  ])

  const [isRunning, setIsRunning] = useState(false)

  const handleToggleTimer = () => {
    setIsRunning((prevState) => !prevState)
  }

  useEffect(() => {
    if (!isRunning) return
    const timerId = setInterval(() => {
      setList((prevState) => prevState.slice(0, -1))
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [isRunning])

  useEffect(() => {
    if (list.length > 0) return

    const timeoutId = setTimeout(() => {
      setIsActive(false)
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [list.length])

  useEffect(() => {
    console.log('🟢 mounted')

    return () => {
      console.log('🔴 destroyed')
    }
  }, [])

  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Всі задачі виконано, компонент закриється через 3с...</p>
      )}
      <button onClick={handleToggleTimer}>
        {isRunning ? 'Зупинити' : 'Запустити'}
      </button>
    </>
  )
}
