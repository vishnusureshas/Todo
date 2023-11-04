import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  let initTodo
  if(localStorage.getItem("todos") === null) {
    initTodo = []
  }else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("Deleted",todo);
    // let index = todos.indexOf(todo)
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
        return e !== todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo = (title,desc) => {
     console.log("I m adding this todo",title,desc);
     let sno;
     if(todos.length === 0) {
      sno = 0
     } else {
      let sno = todos[todos.length-1].sno + 1
     }
   
     const myTodo ={
       sno:sno,
       title:title,
       desc:desc
     }
     setTodos([...todos,myTodo])
     console.log(myTodo);     
  }

  const [todos, setTodos] = useState (initTodo)

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
   }, [todos])

  return (
    <>
  
        <Header title="My TodosList"/>
   
           <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
      
        <Footer />

    </>
  );
}

export default App;
