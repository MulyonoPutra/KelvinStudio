import React from 'react'
import '../../../App.css'
import HeroSection from '../hero/HeroSection'
import Cards from '../../shared/cards/Cards'
import Footer from '../../shared/footer/Footer'


function Home() {
    return (
        <div>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home