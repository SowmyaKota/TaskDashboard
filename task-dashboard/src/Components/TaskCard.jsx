
import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      <h4>{task.title}</h4>
      {task.description && <p>{task.description}</p>}
    </div>
  );
};

export default TaskCard;
