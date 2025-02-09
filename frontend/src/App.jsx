import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "https://task-manager-api.onrender.com/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default App;