import React,{Routes,Route,useNavigate} from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <a className="navbar-brand">Industrial Effluent Monitoring</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ml-auto">
          <li className="nav-item active">  
          <NavLink className="nav-link" to="/" >Home </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
               
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Location
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/location1">SET</NavLink>
              <NavLink className="dropdown-item" to="/location2">SDS</NavLink>
              <NavLink className="dropdown-item" to="/location3">SNSR</NavLink>
              <NavLink className="dropdown-item" to="/location4">SH</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/">All</NavLink>
             
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/voilations">Voilation</NavLink>
          </li>
        </ul>  
      </div>
    </nav>
    </>
  )
}

export default Navbar