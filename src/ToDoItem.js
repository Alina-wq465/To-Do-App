import React, { useState } from 'react';

function ToDoItem({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditChange = (e) => {
    setNewText(e.target.value);
  };

  const handleEditSubmit = () => {
    editTask(newText);
    setIsEditing(false);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <li onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={handleEditChange}
          onBlur={handleEditSubmit}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleEditSubmit();
          }}
          autoFocus
        />
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={toggleTaskCompletion}
          >
            {task.text}
          </span>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
