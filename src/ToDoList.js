import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, setTasks }) {
  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          deleteTask={() => deleteTask(index)}
          editTask={(newText) => editTask(index, newText)}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
