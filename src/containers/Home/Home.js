import React from 'react';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



import './Home.css'

const Home = () => {

  const navigate = useNavigate()
  const handleNavigatePage =() =>{
    navigate('/contact')

  }
    return (
        <>
          

            <section id='home' className='home'>
              <div className='home-textWrapper'>
                <h1>Hello, I'm <span className='name'>MD AFFAN</span></h1><br/>
                <h2>( FULL STACK DEVELOPER )</h2><br/>
                <div className='home-contact'>
                <button onClick={handleNavigatePage}>Hire Me</button>
                <a href="AFFAN CV(FSD).docx" download='AFFAN CV(FSD).docx'>
                                <button className='download'>Download CV</button>
                            </a>
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
              
              <div className='image-container'>
                <img src="affan.jpeg.jpg" alt="" srcset="" />
              </div>
            </section>
        </>
    )
}

export default Home