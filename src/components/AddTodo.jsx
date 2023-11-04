import React from "react";
import { useState } from "react";


function AddTodo({addTodo}) {
   const [title, setTitle] = useState("")
   const [desc, setDesc] = useState("")

   const submit = (e) => {
      e.preventDefault()
      if(!title || !desc) {
        alert("Title or Description acnnot be blank")
      }
      else{
      addTodo(title,desc)
      setTitle('')
      setDesc('')
      }
   }

  return (
    <div className="d-flex text-align-center w-100 justify-content-center">
      <div className="w-50 bg-primary mt-5 rounded p-5 text-white">
        <form onSubmit={submit}>
            <h3>Add a Todo</h3>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Todo Title</label>
              <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="" id="title"/>
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
            </div>

            <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
        </form>

      </div>      
    </div>
  );
}

export default AddTodo;
