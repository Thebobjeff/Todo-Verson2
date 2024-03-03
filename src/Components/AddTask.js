import { useState } from "react";

/**
 * Handles the form submission and updates the list of tasks accordingly.
 *
 * @param {event} event - The form submission event
 * @return {void} 
 */
export const AddTask = ({list, setList,todo,setTodo,updateId,setUpdate}) => {
    const [notBlank, setBlank] = useState(false)

    /**
     * Handles the form submission and updates the list of tasks accordingly.
     *
     * @param {event} event - The form submission event
     * @return {void} 
     */
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUpdate(false)
        const date = new Date();

        if((event.target.task.value !== "" ) && todo.id){// makes sure the input field is not blame and task ready?
            setBlank(false)
            setList(list.map(tsak => tsak.id === todo.id ?
                 {id: todo.id ,title: event.target.task.value , time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, progress: todo.progress}
                  : tsak));   // updates the correct task value 
           event.target.task.value = "";

        }else if(event.target.task.value !== "" ){
            setBlank(false)
            const tsk = {
            id: date.getTime(),
            title: event.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            progress: false
          }
         setList([...list, tsk]);  
        }else{
            setBlank(true)
        }
        event.target.task.value = ""; 
        setTodo({});
        
    }
    

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit} >
                <input type="text"  name="task" value={todo.title || ""} autoComplete="off"  placeholder={notBlank? "Please Add Task!":"Add task"} onChange={event=> setTodo({...todo, title: event.target.value})}/>
                <button type="submit">{updateId? "update Task":"Add Task"}</button>
            </form>
        </section>

  )
}