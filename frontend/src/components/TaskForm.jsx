import { useState } from "react";
import axios from "axios";

const API_URL = "https://task-manager-api.onrender.com/tasks";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    try {
      await axios.post(API_URL, { title });
      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1 rounded"
        placeholder="Enter task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;