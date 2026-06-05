import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { tasks } from './data/tasks'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main tasks={tasks} />
    </div>
  )
}

export default App