import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
