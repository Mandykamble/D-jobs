import React from 'react'
import './Team.css'
import linkedin from '../../utils/intel.png'
import m from '../../utils/intel.png'
import fb from '../../utils/intel.png'

export default function Card(props) {
    console.log(props)
  return (
    <div>
        <div className='card-container'>
                <div >
                <img  className='image' alt="zidane img"/>
                </div>
                <div className='card-desc'>
                    <div className='name'>
                        {props.team.name}
                    </div>
                    <div className='role'>
                    {props.team.role}
                    </div>
                    <div className='link'>
                    {/* {(props.team.link[0]) && <img className='links' src={linkedin} alt="linledin"/>}
                    {(props.team.link[1]) &&<img className='links' src={m} alt="medium"/>}
                    { (props.team.link[2]) && <img className='links' src={fb} alt="facebook"/>} */}
                    </div>
                </div>
            </div>

    </div>
  )
}