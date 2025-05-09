import axios from 'axios'
import React, { useState } from 'react'

const AddTaskModal = () => {
    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    const [status, setStatus]=useState("To Do")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!title.trim()) return alert("Title is required")
            const newTask={title, description, status}

        try{
            const response=await axios.post("http://localhost:3001/tasks",newTask)
            onTaskAdded(response.data)
            onClose()
        }
        catch(error){
            console.error("Error adding task:", error)
        }
    }
    
  return (
    <div className='modal'>
        <h2>Add new Task</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title *'
            value={title} onChange={e=> setTitle(e.target.value)}
            required/>

            <textarea placeholder='Description' value={description}
            onChange={e=>setDescription(e.target.value)}/>

            <select value={status} onChange={e=> setStatus(e.target.value)}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
                </select>
                <button type='submit'>Add Task</button>
                <button type='button' onClick={onClose}>Cancel</button>
        </form>
      
    </div>
  )
}

export default AddTaskModal
