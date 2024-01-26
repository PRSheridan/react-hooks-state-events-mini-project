import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleSelectCategory(event) {
    event.preventDefault();
    [...event.target.parentNode.children].forEach(button => button.classList.remove("selected"));
      event.target.className = "selected"
      setCategory(event.target.textContent);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={handleSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} category={category}/>
    </div>
  );
}

export default App;
