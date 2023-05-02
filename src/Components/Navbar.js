import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const navstyles={
    color: "white",
    textDecoration: "none",
    padding: "10px"
  }
  const parent={
    
  }
  return (
    <div className='header'>
        <h1>Shopping Cart</h1>
        <div className='right' style={parent}>
           <Link to="/" style={navstyles}>Homepage</Link>
            <Link to="/cart" style={navstyles}>Cartpage</Link>
        </div>
    </div>
  )
}

export default Navbar