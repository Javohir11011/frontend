import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const baseUrl = import.meta.env.VITE_API_URL + "/todos";
  const fetchTasks = async () => {
    const response = await axios.get(baseUrl);
    const updatedTasks = response.data.map((task) => ({
      id: task.id,
      title: task.title || task.text,
    }));

    setTasks(updatedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: uuidv4(),
        title: newTask,
      };

      await axios.post(baseUrl, newTaskObj);
      setNewTask("");
      fetchTasks();
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={addTask}
          >
            Add
          </button>
        </div>

      
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded"
              >
                <span>{task.title}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
