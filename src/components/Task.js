import React from "react";

function Task( {taskCategory, taskText}) {
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
