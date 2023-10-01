import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className = {`navbar navbar-expand-lg`} style={{borderBottom:props.mode==='dark'?'2px solid rgb(111, 113, 237)':'2px solid black'&& props.blMode==='blue'?'2px solid black':'2px solid black'}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/textform" style={{color:props.mode==='dark'?'rgb(111, 113, 237)':'black'&& props.blMode==='blue'?'black':'black'}}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='dark'?'rgb(111, 113, 237)':'black'&& props.blMode==='blue'?'black':'black'}}>{props.title1}</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <div className={`form-check form-switch mx-5 text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input my-3" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
</div>

{/* blue */}
<div className={`form-check form-switch  text-${props.mode==='light'? 'dark':'light' }`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.blueFunc}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Blue Mode</label>
</div>


        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    title1 : PropTypes.string.isRequired
}