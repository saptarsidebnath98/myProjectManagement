import { useRef } from "react";
import Input from "./Input";

export default function ProjectForm({onAdd}) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
  
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }


  return (
    <div id="form">
      <form action="#">
        <Input ref={title} label="Title" type="text"/>
        <Input ref={description} label="Description" textarea/>
        <Input ref={dueDate} label="Due Date" type="date"/>
        <button id="saveBtn" onClick={handleSave}>Save</button>
      </form>
    </div>
  )
}
