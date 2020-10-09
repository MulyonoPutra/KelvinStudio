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
import PreweddingDetails1 from './components/page/our-service/prewedding/PreweddingDetails1';
import Wedding from './components/page/our-service/wedding/Wedding';
import WeddingDetails04 from './components/page/our-service/wedding/WeddingDetails4';
import WeddingDetails03 from './components/page/our-service/wedding/WeddingDetails3';
import WeddingDetails02 from './components/page/our-service/wedding/WeddingDetails2';

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
        <Route path="/prewedding/prewedding-details" exact component={PreweddingDetails} />
        <Route path="/prewedding/prewedding-details1" exact component={PreweddingDetails1} />
        <Route path="/wedding" exact component={Wedding} />
        <Route path="/wedding/wedding-details-04" exact component={WeddingDetails04} />
        <Route path="/wedding/wedding-details-03" exact component={WeddingDetails03} />
        <Route path="/wedding/wedding-details-02" exact component={WeddingDetails02} />
      </Switch>
    </Router>
    
  );
}

export default App;
