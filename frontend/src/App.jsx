import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const API_URL = "https://task-manager-filterpixel.onrender.com/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (title) => {
    if (!title.trim()) return;
    try {
      const response = await axios.post(API_URL, { title });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const completeTask = async (id) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}/complete`);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error("Error marking task as complete:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="task-manager">
        <h1 className="title">Task Manager - Shubhang Narain</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
