import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item">
          <span className={`task-text ${task.completed ? "completed" : ""}`}>
            {task.title}
          </span>
          <div className="task-buttons">
            <button
              onClick={() => completeTask(task._id)}
              className="complete-btn"
            >
              Complete
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
