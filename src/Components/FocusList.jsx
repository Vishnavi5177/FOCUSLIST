export default function FocusList({tasks , updateTask, deleteTask}) {

  const toggleComplete = (index)=>{
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }
  return (
    <ul className="focus-list">
      {tasks.map((task, index)=> (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div>
            <span>{task.text}
              <small>({task.priority} , {task.category})</small>
            </span>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}