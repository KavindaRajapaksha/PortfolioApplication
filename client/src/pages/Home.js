import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../components/NavBar';

import './Home.css';

const Home = () => {
  return (
    <div className='homePage'>
    <section className='hedder'>
      <NavBar/>
    </section>
      <section className='home' id='home'>
        <div className='home-content'>
          <h3>Hello It's me!</h3>
          <h1>Kavinda S Rajapaksha</h1>
          <h3>And I'm a <span className='multiple-text'>Fullstack Developer</span></h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className='social-media'>
           <a href='https://web.facebook.com/kavinda.rajapaksha.50/'> <FontAwesomeIcon className='facebook' icon={faFacebook} size="2xl"  style={{color: "#0557e6",marginRight: "9px"}}/></a>
            <a href='https://www.youtube.com/channel/UC7AM2vInSWHNZL8sUFShyAA'><FontAwesomeIcon className='youtube' icon={faYoutube} size="2xl" style={{color: "#c31d1d",marginRight: "9px"}}/></a>
            <a href='https://github.com/KavindaRajapaksha'><FontAwesomeIcon className='github' icon={faGithub} size="2xl" style={{color: "#17191c",marginRight: "9px"}}/></a>  
            <a href='https://www.linkedin.com/in/kavinda-s-rajapaksha-548808227/'><FontAwesomeIcon className='linkedin' icon={faLinkedin} size="2xl" style={{color: "#165cd4",}} /></a>
          </div>
          <div className='home-img'>
          <img src={require('../assets/home.png')} alt='Kavinda S Rajapaksha'/>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
