export const ShowTask = ({list,setList,todo,setTodo,setUpdate}) => {

  /**
   * Updates the progress of a task in the list.
   *
   * @param {type} id - description of parameter
   * @return {type} description of return value
   */
  const handleComplete = (id)=>{
    setList(list.map(target => target.id === id? {...target, progress: !target.progress}: target ))
  }
  
  /**
   * A function that handles the edit action.
   *
   * @param {type} id - description of parameter
   * @return {type} undefined
   */
  const handleEdit = (id)=>{
      setUpdate(true)
      setTodo(list.find(fun=> fun.id === id));
  }
  
  /**
   * Function to handle deletion of an item from the list.
   *
   * @param {type} id - the id of the item to be deleted
   * @return {type} undefined
   */
  const handleDelete=(id)=>{
    setList(list.filter(object=> object.id !== id ))
  }
  return (
    <section className="showTask">
        <div className="head">
          <div>
              <span className="title">ToDo</span>
              <span className="count">{list.length}</span>
          </div>
          <button className="clearAll" onClick={()=> setList([])}>Clear All</button>
      </div>
      <ul className="items">{list && list.map((task) => 
          <li key={list.id}>
            <p>
              <span className="name">{task.title}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={()=> handleComplete(task.id)} class={task.progress? "bi bi-check2-square":"bi bi-app"}></i>
            <i onClick={()=> handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={()=> handleDelete(task.id)} className="bi bi-trash" ></i>
          </li> )}
        </ul>
    </section>
  )
}
