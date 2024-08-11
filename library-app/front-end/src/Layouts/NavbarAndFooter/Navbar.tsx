import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
    <div className='container-fluid'>
      <span className='navbar-brand'>Salman Read</span>
      <button className='navbar-toggler' type='button' aria-controls='navbarNavDropdown' 
      data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-label='Toggle Navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to={"/home"}>Ana Sayfa</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink className={"nav-link"} to={"/search"}>Kitap Ara</NavLink>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item m-1'>
            <a href="#" className='btn btn-outline-light' type='button'>Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;