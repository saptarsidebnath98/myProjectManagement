import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DefaultDisplay from './components/DefaultDisplay';
import ProjectForm from './components/ProjectForm';
import './App.css';
function App() {

  const [projectState, setProjectSate] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectSate(prevState => {
      return{
        ...prevState,
        selectedProjectId : null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectSate(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
      
  }

  console.log(projectState);

  let content;
  if(projectState.selectedProjectId === null){
    content = <ProjectForm onAdd={handleAddProject}/>
  }else if(projectState.selectedProjectId === undefined ){
    content = <DefaultDisplay onClick={handleStartAddProject}/>
  }
  
  return (
    <div className="container">
    <Sidebar onClick={handleStartAddProject}/>
    {content}
    </div>
  )
}

export default App;
