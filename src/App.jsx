import FocusList from "./Components/FocusList";
import Focusform from "./Components/Focusform";
import Progresstracker from "./Components/Progresstracker";



function App() {
  return(
    <div>
      <h1>FocusList</h1>
      <p>Stay organized, boost productivity, and focus on what truly matters</p>
      <Focusform />
      <FocusList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;
