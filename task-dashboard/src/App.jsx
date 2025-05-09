import { useState } from 'react'
import './App.css'
import KanbanBoard from './Components/KanbanBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <h1>Task Management Dashboard</h1>
       <KanbanBoard/>
      </div>
      
    </>
  )
}

export default App
