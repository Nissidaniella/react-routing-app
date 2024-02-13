import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ServiceDetails from './ServiceDetails';

function Router() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/services/:id" component={ServiceDetails} />
    </Router>
  );
}

export default Router;