import React from "react";
import Task from "./Task"
//restructure taskList..?

function TaskList( {tasks, setTasks, category} ) {
  function handleDeleteTask(event) {
    const tempTasks = [...event.target.parentNode.children][1].textContent;
    setTasks(tasks = tasks.filter((task) => tempTasks !== task.text))
  }

//tasks are not rendered at once... because I am filtering them here
//potentially handle in function?
  return (
    <div className="tasks">
      {tasks
      .filter((task) => category === "All" || task.category === category)
      .map((task) => {
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
