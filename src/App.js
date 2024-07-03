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

  const handleTimeframeChange = (timeframe) => {
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
    if (timeframe === 'upcoming') {
      return tasks.filter(task => task.timeframe === 'upcoming');
    } else {
      return tasks.filter(task => task.timeframe === timeframe);
    }
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
            <button onClick={() => handleTimeframeChange("today")}>Today</button>
            <button onClick={() => handleTimeframeChange("weekly")}>Weekly</button>
            <button onClick={() => handleTimeframeChange("monthly")}>Monthly</button>
            <button onClick={() => handleTimeframeChange("yearly")}>Yearly</button>
            <button onClick={() => handleTimeframeChange("upcoming")}>Upcoming Events</button>
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
              <select value={taskTimeframe} onChange={(e) => handleTimeframeChange(e.target.value)}>
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
