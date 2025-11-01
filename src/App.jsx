import Focusform from "./Components/Focusform";
import FocusList from "./Components/FocusList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
     newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div className="App">
      <header>
      <h1 className="title">FocusList</h1>
      
      <p className="tagline">Stay organized, boost productivity, and focus on what truly matters</p>
      </header>
      <Focusform addTask = {addTask}/>
      <FocusList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length > 0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}
    </div>
  )
}