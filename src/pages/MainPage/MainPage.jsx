import { useEffect, useState } from "react"

import { Wrapper, Loading } from "../../App.styled"
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main"
import { tasks } from "../../data/data"

export function MainPage() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  return (
      <Wrapper>
        <Header />
        {isLoading ? (
          <Loading>Данные загружаются</Loading>
        ) : (
          <Main tasks={tasks} />
        )}
      </Wrapper>
    )
  }