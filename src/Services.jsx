import React from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>We offer a range of services:</p>
      <ul>
        <li><NavLink to="/services/1">Service 1</NavLink></li>
        <li><NavLink to="/services/2">Service 2</NavLink></li>
        <li><NavLink to="/services/3">Service 3</NavLink></li>
      </ul>
    </div>
  );
}

export default Services;