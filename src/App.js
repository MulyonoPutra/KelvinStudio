import React from 'react';
import './App.css'
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/page/home/Home';
import Service from './components/page/our-service/OurService';
import Contact from './components/page/contact/Contact';
import AboutUs from './components/page/about-us/AboutUs';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about-us" exact component={AboutUs} />
      </Switch>
    </Router>
    
  );
}

export default App;
