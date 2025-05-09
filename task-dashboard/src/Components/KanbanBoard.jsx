import React, { useEffect, useState } from 'react'
import Column from './Column'


const KanbanBoard = () => {
    const columns= ["To Do", "In Progress", "Done"]
  return (
    <div>
        <div className='full-board'>
          <h2 className='header'>Task Management Dashboard</h2>
          <div className='board'>
            <button className='task'>Add New Task</button>
          </div>
          <div className='columns'>
            {columns.map((column)=>{
              <Column key={column} title={column}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default KanbanBoard
