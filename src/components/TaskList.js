import React from "react";
import Task from "./Task"

function TaskList( {tasks, setTasks, category} ) {
  function renderTasks() {
  }

  function handleDeleteTask(event) {
    const tempTasks = [...event.target.parentNode.children][1].textContent;
    setTasks(tasks = tasks.filter((task) => tempTasks !== task.text))
  }

  return (
    <div className="tasks">
      {tasks.filter((task) => category === "All" || task.category === category)
        .map((task, i) => {
          console.log(task)
          return (
            <Task 
              key={i}
              category={task.category} 
              text={task.text}
              deleteTask={handleDeleteTask}
            />
          )
        })
    }
    </div>
  );
}

export default TaskList;
