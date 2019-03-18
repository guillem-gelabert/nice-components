import React from 'react';
import './Tab.css';

const Tab = ({ onClick, isActive, children }) => (
  <div
    onClick={onClick}
    className={`tab-container ${isActive ? 'active' : 'inactive'}`}
  >
    {children}
  </div>
);

export default Tab;
