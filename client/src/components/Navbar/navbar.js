import React from 'react'
import { Link } from 'react-router-dom'
import logimg from '../../utils/intel.png'
// import './navbar.css'



const navbar = () => {
  return (
    
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark asj">
  <div class="container lg mt-2 ms-4">
    <a to="/" class="navbar-brand"  ><img src={logimg} className='logo' height="40"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4 h4">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="homepage">Home</a>
        </li>
        <li class="nav-item">
          <a to="post" class="nav-link" href="select" >Get-started</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        </ul>
      
    </div>
  </div>
</nav>


    </>
    
  )
}

export default navbar
