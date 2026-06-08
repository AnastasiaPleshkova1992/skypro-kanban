import { use, useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { tasks } from './data/data'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="wrapper">
      <Header />
      {isLoading ? (
        <div className="loading">Данные загружаются</div>
      ) : (
        <Main tasks={tasks} />
      )}
    </div>
  )
}

export default App