import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")

  function handleSelectCategory(event) {
    [...event.target.parentNode.children].forEach(button => button.classList.remove("selected"));
      setCategory(event.target.textContent);
      event.target.className = "selected"
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={handleSelectCategory}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} category={category}/>
    </div>
  );
}

export default App;
