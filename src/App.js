import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { ShowTask } from "./Components/ShowTask";
import { AddTask } from "./Components/AddTask";
import './App.css';

/**
 * Main App \(￣︶￣*\))
 */
export const App = () => {
  const [updateId, setUpdate] = useState(false)
  const [list, setList] = useState(JSON.parse(localStorage.getItem('List')) || [])
  const [todo, setTodo] = useState({})
 
  useEffect(()=>{
    if (list){
      localStorage.setItem('List', JSON.stringify(list));
  }
},[list])

  return (
    <div className="App">
      <header><Header/></header>
      <AddTask  
      key="list.id" 
      updateId={updateId} setUpdate={setUpdate}
      list={list} setList={setList}
      todo={todo} setTodo={setTodo}
      />
      <ShowTask 
      key="list.id" 
      updateId={updateId} setUpdate={setUpdate}
      list={list} setList={setList}
      todo={todo} setTodo={setTodo}
      />
    </div>
  )
}

export default App;
