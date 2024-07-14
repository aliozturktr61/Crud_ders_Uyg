import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from './components/ListItem';




const App = () => {
  const [todos,setTodos]=useState([]);
  const [error,setError]=useState("");
  useEffect(()=>{
axios.get("http://localhost:4000/todos")
.then((res)=>setTodos(res.data))
.catch((error)=>setError(error.message));
  },[]);
 
  return (
    <div className="container p-3">
      <h1 className="text-center">Server <span className="text-warning">CRUD</span></h1>
    <Form setTodos={setTodos}/>
   <ul>
    {todos?.map((todo)=>
      <ListItem key={todo.id} todo={todo}/>)}
      
   </ul>
    </div>

)
}

export default App;

