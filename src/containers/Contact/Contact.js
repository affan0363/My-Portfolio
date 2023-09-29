import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
  return (
    <>
    <div>
      <h1 className='abt'>Contact Me</h1>
    </div>
    <div className='contact-container'>
      <h2 className='contactt'>YOU CAN CONTACT WITH ME...</h2><br/>
      <div className='cont'>
      <ul>
        <li className='mob'><span className='sp'>Mobile No. :-</span> +91 7563959765</li>
        <li className='eml'><span className='sp'>Email :-</span>  mdaffan02477@gmail.com</li>
      </ul>
      </div><br/>
      <div className="social-media">
      
      <a href="https://www.linkedin.com/in/md-affan-74519221a/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/affan_363/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      
      <a href="https://www.facebook.com/md.affan.73594">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://github.com/affan0363">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
      
    </div>
    </>
    
  )
}

export default Contact