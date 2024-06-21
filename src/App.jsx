import { useState } from 'react';
import './App.css';
function App() {

  const [activeForm, setAcitveForm] = useState(false);

  function handleForm(){
      setAcitveForm(true);
  }
  
  return (
    <div className="container">
    <div id="sidebar">
      <h2>Your Projects</h2>
      <button id='addBtn' onClick={handleForm}>+ Add Project</button>
    </div>
    <div id="display">

      {activeForm ? <div><h2>Form is here</h2></div> : <div><h2>No Project to show</h2></div> }
    </div>
    </div>
  )
}

export default App
