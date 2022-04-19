import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.css'

export const Dropdown = ({ options }) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        {options.map((op, idx) => <span key={idx}>{op}</span>)}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  
  options: PropTypes.arrayOf(PropTypes.string),
  
};

Dropdown.defaultProps = {
  options: [],
};