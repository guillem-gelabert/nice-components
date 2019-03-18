import React from 'react';
import './Panels.css';

const Panels = ({ children, activeIndex }) => (
  <div className="panels">
    {children[activeIndex]}
  </div>
);

export default Panels;
