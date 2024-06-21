export default function Sidebar({handleForm}) {
  return (
    <div id="sidebar">
      <h2>Your Projects</h2>
      <button id='addBtn' onClick={handleForm}>+ Add Project</button>
    </div>
  )
}
