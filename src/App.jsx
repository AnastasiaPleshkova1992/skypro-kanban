import { GlobalStyle } from "./GlobalStyle"
import { AppRoutes } from "./routes/AppRoutes"
import { useState } from "react"
import "./App.css"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
      <GlobalStyle />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  )
}

export default App