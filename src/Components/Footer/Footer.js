import React, {useState} from 'react';
import './Footer.css';
// import SocialFollow from './SocialFollow'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return(
            
    <div className='Footer'>
        <div className='Footer1'>
    <div className = 'AboutUs'>About Us</div>
    <div className = 'needHelp?'>Need Help?</div>
    <div className= 'contactUs'>Contact Us</div>
    </div>
    <div className='Footer2'>

    <div className='Social-Container'>
        <h3 className='social-title'>@pipsholes</h3>
        <a href='https://www.youtube.com/c/jamesquick'
        className='youtube social'>
        <FontAwesomeIcon icon={faYoutube} size='2x'/> </a>

        <a href='https://www.facebook.com/learnbuildteach'
        className='facebook social'>
        <FontAwesomeIcon icon={faFacebook} size='2x'/> </a>

        <a href='https://www.instagram.com/learnbuildteach'
        className='instagram social'>
        <FontAwesomeIcon icon={faInstagram} size='2x'/> </a>

        <a href='https://www.twitter.com/jamesqquick'
        className='twitter social'>
        <FontAwesomeIcon icon={faTwitter} size='2x'/> </a>

        <div className='copyright'>Copyright 2020 pipsholes All rights reserved.</div>
            </div>
</div>
    </div>
    
    )
}
export default Footer;