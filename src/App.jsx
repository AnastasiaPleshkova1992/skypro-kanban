import { useEffect, useState } from 'react'

import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './App.styled'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { tasks } from './data/data'

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {isLoading ? (
          <div className="loading">Данные загружаются</div>
        ) : (
          <Main tasks={tasks} />
        )}
      </Wrapper>
      </>
    )
  }

export default App