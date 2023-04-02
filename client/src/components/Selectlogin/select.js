import React from 'react'
import employer from '../../utils/boss2.jpg'
import employee from '../../utils/worker2.jpg'
import './select.css'


// let width = 'width: 18rem';

const select = () => {
  return (
    <>
    <a href='loginboss' className='atag'><div className='bosssel'>
    Client
    </div>
    </a>
    <div className='divider'>

    </div>
    <a href='loginemp' className='atag'><div className='empsel'>
    Employee
    </div></a>
    </>
  )
}

export default select
