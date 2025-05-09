// TaskColumn.jsx
import React from "react";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ status, tasks, onStatusChange }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const task = tasks.find((t) => t.id.toString() === taskId);
    if (taskId) {
      onStatusChange({ id: parseInt(taskId), status });
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="task-column" onDrop={handleDrop} onDragOver={allowDrop}>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
