import React from 'react'
import './Skill.css'


const Skill = () => {
  return (
    <>
    <div>
      <h1 className='abt'>My Skills</h1>
    </div>
    <div className='skill-container'>
      <div className='front-end'>
        <h1 className='front'>FRONT-END</h1>
        <ul className='frnt'>
          <li>HTML</li>
          <li>CSS</li>
          <li>BOOTSTRAP</li>
          <li>MATERIAL UI</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
        </ul>
      </div>
      <div className='back-end'>
        <h1 className='back'>BACK-END</h1>
        <ul className='bck'>
          <li>NODE.JS</li>
          <li>EXPRESS.JS</li>
          <li>JAVA (Basic)</li>
          <li>C(Basic)</li>
        </ul>
      </div>
      <div className='database'>
        <h1 className='data'>DATABASE</h1>
        <ul className='dbs'>
          <li>MONGODB</li>
        </ul>
      </div>
      <div className='database'>
        <h1 className='data'>VERSION CONTROL</h1>
        <ul className='dbs'>
          <li>GIT & GITHUB</li>
        </ul>
      </div>
    </div>
   
    </>

  )
}

export default Skill