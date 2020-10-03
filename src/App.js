import React from 'react';
import './App.css'
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/page/home/Home';
import Service from './components/page/our-service/OurService';
import Contact from './components/page/contact/Contact';
import AboutUs from './components/page/about-us/AboutUs';
import Prewedding from './components/page/our-service/prewedding/Prewedding';
import PreweddingDetails from './components/page/our-service/prewedding/PreweddingDetails';
import Wedding from './components/page/our-service/wedding/Wedding';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/prewedding" exact component={Prewedding} />
        <Route path="/prewedding-details" exact component={PreweddingDetails} />
        <Route path="/wedding" exact component={Wedding} />
      </Switch>
    </Router>
    
  );
}

export default App;
