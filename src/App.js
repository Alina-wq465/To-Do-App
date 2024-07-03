import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskTimeframe, setTaskTimeframe] = useState("today");
  const [showAddInput, setShowAddInput] = useState(false);

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, timeframe: taskTimeframe, completed: false }]);
      setTaskText("");
      setTaskTimeframe("today");
      setShowAddInput(false);
    }
  };

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleTimeframeChange = (e) => {
    setTaskTimeframe(e.target.value);
  };

  const selectTimeframe = (timeframe) => {
    setTaskTimeframe(timeframe);
    setShowAddInput(false);
  };

  const toggleShowAddInput = () => {
    setShowAddInput(!showAddInput);
    if (!showAddInput) {
      setTaskText("");
    }
  };

  const filterTasksByTimeframe = (timeframe) => {
    return tasks.filter(task => task.timeframe === timeframe);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-header">
            <button onClick={toggleShowAddInput}>Add Task</button>
          </div>
          <div className="sidebar-body">
            <button onClick={() => selectTimeframe("today")}>Today</button>
            <button onClick={() => selectTimeframe("weekly")}>Weekly</button>
            <button onClick={() => selectTimeframe("monthly")}>Monthly</button>
            <button onClick={() => selectTimeframe("yearly")}>Yearly</button>
            <button onClick={() => selectTimeframe("upcoming")}>Upcoming Events</button>
          </div>
        </div>
        <div className="main-content">
          {showAddInput && (
            <div className="input-container">
              <input
                type="text"
                value={taskText}
                onChange={handleInputChange}
                placeholder="Add a new task"
              />
              <select value={taskTimeframe} onChange={handleTimeframeChange}>
                <option value="today">Today</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="upcoming">Upcoming Events</option>
              </select>
              <button onClick={addTask}>Add</button>
            </div>
          )}
          <h2>{taskTimeframe === 'upcoming' ? 'Upcoming Events' : `${taskTimeframe.charAt(0).toUpperCase() + taskTimeframe.slice(1)} Tasks`}</h2>
          <ToDoList tasks={filterTasksByTimeframe(taskTimeframe)} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
