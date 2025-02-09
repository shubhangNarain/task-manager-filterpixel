import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="add-task-btn">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
