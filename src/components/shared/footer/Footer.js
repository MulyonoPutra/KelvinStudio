import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/kelvinphotography.id/?hl=id' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.facebook.com/kelvinphotography.id/' target="_blank" rel="noopener noreferrer">Facebook</a>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className="size-logo" src="/assets/images/logo/gold.png" alt=""/>
            </Link>
          </div>
          <small className='website-rights'>Kelvin Studio © 2020</small>
          <div className='social-icons'>
            <a
            href="/"
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/kelvinphotography.id/?hl=id'
              rel="noopener noreferrer"
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
              rel="noopener noreferrer"
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link twitter'
              href='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;