import React from 'react'
import './job.css'

const Cardasj = (props) => {

  return (
    <div>
      <div class="card" style={{width: '30rem'}}>
  {/* <img class="card-img-top" src={props.team.src} alt="Card image cap"/> */}
  <div class="card-body">
    <h2 class="card-title">{props.job.jname}</h2>
    <p class="card-text">{props.job.jobDesc}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Client name: {props.job.employer}</li>
    <li class="list-group-item">Location: {props.job.jlocation}</li>
    <li class="list-group-item">Mode: {props.job.jmode}</li>
    <li class="list-group-item">Budjet: {props.job.budjet}</li>
  </ul>
  <div class="card-body">
    {/* <a href="jobdetails" class="card-link">Apply</a> */}
    <button class="card-link">Apply</button>    
  </div>

</div>

    </div>
    
  )
}

export default Cardasj
