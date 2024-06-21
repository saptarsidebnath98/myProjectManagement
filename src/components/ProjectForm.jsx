export default function ProjectForm({onSubmit}) {
  return (
    <div id="form">
      <form action="#">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Description</label>
        <textarea type="text" rows={10}/>
        <label htmlFor="">Due Date</label>
        <input type="date" id="formDate"/>
        <button id="saveBtn" onClick={onSubmit}>Save</button>
      </form>
    </div>
  )
}
