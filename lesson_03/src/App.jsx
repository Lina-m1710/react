import { useEffect, useState } from 'react'
import DeletionTimer from './components/DeletionTimer/DeletionTimer'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(true)
  const handleToggleActive = () => {
    setIsActive((prevState) => !prevState)
  }
  return (
    <>
      <button onClick={handleToggleActive}>
        {isActive ? 'Деактивувати' : 'Активувати'}
      </button>
      {isActive && <DeletionTimer setIsActive={setIsActive} />}
    </>
  )
}

export default App
