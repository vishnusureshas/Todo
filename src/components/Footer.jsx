import React from 'react'
import './Footer.css'

function Footer() {
  let footerStyle = {
    position:"relative",
    top:"100vh",
    width:"100%",
    border:"2px solid red"
  }

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}

export default Footer
