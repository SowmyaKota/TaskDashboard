import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddTaskModal from './AddTaskModal'


const KanbanBoard = () => {
    const [tasks, setTasks]=useState([])
    const [showModal, setShowModal]=useState(false)

    const fetchTasks=async()=>{
      const response=await axios
      .get("http://localhost:3001/tasks")
        setTasks(response.data)
      }
      useEffect(()=>{
        fetchTasks()
      }, [])

      const handleTaskAdded=task=>{
        setTasks(prev=>[...prev, task])
      }

  return (
    <div>
      <button onClick={()=>setShowModal(true)}>Add New Task</button>
      {
        showModal && (
          <AddTaskModal onClose={()=>setShowModal(false)} onTaskAdded={handleTaskAdded}/>
        )
      }
    </div>
  )
}

export default KanbanBoard
