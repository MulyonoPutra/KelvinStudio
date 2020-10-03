import React from 'react'
import { Button } from '../../shared/button/Button'
import '../hero/HeroSection.css'
import '../../../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
        <video src='/assets/videos/video-2.mp4' autoPlay loop muted />
        <h1>“I don’t trust words. I trust pictures.”</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    )
}

export default HeroSection
