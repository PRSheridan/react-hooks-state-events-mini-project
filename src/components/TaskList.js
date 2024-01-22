import React from "react";
import Task from "./Task"

function TaskList( {tasks} ) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task 
            taskCategory={task.category} 
            taskText={task.text}
          />
        )
      })}
    </div>
  );
}

export default TaskList;
