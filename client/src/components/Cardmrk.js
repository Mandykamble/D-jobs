import React from 'react'
import './Emps.css'

const Cardmrk = (props) => {
  return (
    <div>
      <div class="card" style={{width: '30rem'}}>
  {/* <img class="card-img-top" src={props.team.src} alt="Card image cap"/> */}
  <div class="card-body"> Name:
    <h2 class="card-title">{props.emp.name}</h2>
    <p class="card-text">{props.emp.role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Account Address: {props.emp.employee}</li>
    <li class="list-group-item">Sills: {props.emp.skills}</li>
    <li class="list-group-item">Age: {props.emp.age.toString()}</li>
    <li class="list-group-item">years-of-experiance: {props.emp.yearsofexperiance.toString()}</li>
  </ul>
  <div class="card-body">
    {/* <a href="jobdetails" class="card-link">Apply</a> */}
    <button class="card-link">Hire</button>    
  </div>
</div>
    </div>
  )
}

export default Cardmrk
