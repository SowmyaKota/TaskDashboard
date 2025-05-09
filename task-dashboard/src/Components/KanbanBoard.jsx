import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TaskColumn from './TaskColumn'
import TaskForm from './TaskForm'



const KanbanBoard = () => {
    const [tasks, setTasks]=useState([])
    const [showForm, setShowForm]=useState(false)

    const fetchTasks=async()=>{
      const response=await axios
      .get("http://localhost:3001/tasks")
        setTasks(response.data)
      }
      useEffect(()=>{
        fetchTasks()
      }, [])

      const handleTaskAdded=async(task)=>{
        await axios
        .post("http://localhost:3001/tasks", task)
          fetchTasks()
        }

        const handleTaskUpdate=async(updatedTask)=>{
          await axios
          .patch(`http://localhost:3001/tasks/${updatedTask.id}`, updatedTask)
            fetchTasks()
          }

        const statuses=["To Do", "In Progress", "Done"]

  return (
    <div className='kanban-board'>
      <div className='kanban-header'>
      <button onClick={()=>setShowForm(true)} className='add-task-button'>Add New Task</button>
      </div>
      <div className='columns'>
        {statuses.map(status=>(
          <TaskColumn key={status} status={status}
          tasks={tasks.filter(task=>task.status===status)}
          onStatusChange={handleTaskUpdate}/>
        )
        )}
      </div>
      {showForm && <div className='overlay' onClick={()=>setShowForm(false)}></div>}
      {showForm && <TaskForm onClose={()=>setShowForm(false)} addTask={handleTaskAdded}/>}
    </div>
  )
}

export default KanbanBoard
