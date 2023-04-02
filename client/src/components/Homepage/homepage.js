import React from 'react'
import bgimage from '../../utils/homepage.jpg'
import './homepage.css'
const homepage = () => {
  return (
    <div className='defaultpage'>
      <img src={bgimage} className='homepageimg'/>
      <span className='titletext'>Avalanche</span>
      <span className='subtext'>"Take control of your career<br/> with our decentralized job marketplace."</span>
    </div>
      
    
  )
}

export default homepage
