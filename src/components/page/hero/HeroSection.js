import React from 'react'
import { Button } from '../../shared/button/Button'
import '../hero/HeroSection.css'
import '../../../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
        <video src='/assets/videos/video-2.mp4' autoPlay loop muted />
        <h1>"Every picture tells a story.”</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </div>
      </div>
    )
}

export default HeroSection
