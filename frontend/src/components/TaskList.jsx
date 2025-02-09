import React from "react";
import axios from "axios";

const API_URL = "https://task-manager-api.onrender.com/tasks";

const TaskList = ({ tasks, fetchTasks }) => {
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}/complete`);
      fetchTasks();
    } catch (error) {
      console.error("Error completing task", error);
    }
  };

  return (
    <ul className="space-y-2">
      {tasks?.map((task) => (
        <li key={task._id} className="border p-2 flex justify-between items-center rounded">
          <span className={task.completed ? "line-through text-gray-500" : ""}>{task.title}</span>
          <div className="flex gap-2">
            <button onClick={() => completeTask(task._id)} className="bg-green-500 text-white p-2 rounded">✔</button>
            <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white p-2 rounded">✖</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;