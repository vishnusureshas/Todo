import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  let myStyle = {
    minHeight:"100vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0?"No todos to display":
        props.todos.map((todo)=>{
          return(
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr />
            </>
          )
        })
      }
      {/* <TodoItem todo={props.todos[1]}/> */}
    </div>
  )
}

export default Todos