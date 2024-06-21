import { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
function App() {

  const [activeForm, setAcitveForm] = useState(false);

  function handleForm(){
      setAcitveForm(true);
  }
  
  return (
    <div className="container">
    <Sidebar handleForm={handleForm}/>
    <div id="display">
    <img src="projectImg.png" alt="project icon"/>
    <h2>No project selected</h2>
    <p>Select a project or get stared with a new one</p>
    <button id='createBtn'>Create Project</button>
    </div>
    </div>
  )
}

export default App
