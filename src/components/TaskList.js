import React from "react";
import Task from "./Task"

function TaskList( {tasks, category} ) {
  function handleDeleteTask(event) {
    event.preventDefault()
    event.target.parentNode.remove();
  }

  return (
    <div className="tasks">
      {[...tasks].map((task) => {
          return (
            <Task 
              key={task.text}
              category={task.category} 
              text={task.text}
              deleteTask={handleDeleteTask}
            />
          )
        })}
    </div>
  );
}

export default TaskList;
