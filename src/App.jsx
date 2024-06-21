import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DefaultDisplay from './components/DefaultDisplay';
import ProjectForm from './components/ProjectForm';
import './App.css';
function App() {

  const [activeForm, setAcitveForm] = useState(false);

  function handleFormOpen(){
      setAcitveForm(true);
  }

  function handleSubmit(){
    setAcitveForm(false);
  }
  
  return (
    <div className="container">
    <Sidebar handleForm={handleFormOpen}/>
    {activeForm ? <ProjectForm onSubmit={handleSubmit}/> : <DefaultDisplay/>}
    </div>
  )
}

export default App
