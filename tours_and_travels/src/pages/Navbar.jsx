import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar-box'>
        <nav className='navbar navbar-expand-sm p-3 shadow'>
            <Link to='/' className='navbar-brand'>Asim's Tours and Travels</Link>
            <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#asim'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='asim'>
                <ul className='navbar-nav ms-auto'>
                   <li><Link to='home' className='nav-link'>Home</Link></li>
                   <li><Link to='about' className='nav-link'>About</Link></li>
                   <li><Link to='contact' className='nav-link'>contact</Link></li>
                   <li><Link to='/' className='btn btn-danger'>Logout</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
