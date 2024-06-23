export default function Sidebar({onClick}) {
  return (
    <div id="sidebar">
      <h2>Your Projects</h2>
      <button id='addBtn' onClick={onClick}>+ Add Project</button>
    </div>
  )
}
