import React from 'react'
import './Aboute.css'

const About = () => {
  return (
    <>
      <div>
        <h1 className='abt'>About Me</h1>
      </div>
      <div className='about-container'>
        <h2 className='name-container'>FULL STACK DEVELOPER</h2><br />
        <p className='about'> A highly motivated and adaptable computer science graduate  with a strong passion for web development. Seeking an entry-level  full stack web developer position to leverage my skills in front-end and back-end technologies while continuously learning and contributing to innovative projects.</p>
      </div>
      <br/><br/>
      <hr/>
      <div className='personal-info'>
        <h2 className='personal'>PERSONAL INFORMATION</h2>
        <p className='info'>NAME :-  MD AFFAN<br/>
        FATHER'S NAME :- MD KAMALUDDIN<br/>
        DOB  :- 13/12/2001<br/>
        ADDRESS :- PAHARGANJ, NEW DELHI, 110055
        </p>
        
      </div>
    </>
  )
}

export default About