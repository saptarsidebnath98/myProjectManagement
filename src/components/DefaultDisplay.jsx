export default function DefaultDisplay({onSubmit}) {
  return (
    <div id="display">
    <img src="projectImg.png" alt="project icon"/>
    <h2>No project selected</h2>
    <p>Select a project or get stared with a new one</p>
    <button id='createBtn' onClick={onSubmit}>Create New Project</button>
    </div>
  )
}
