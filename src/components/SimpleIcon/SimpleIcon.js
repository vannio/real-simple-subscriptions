import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import './styles.css';

export const SimpleIcon = ({ name, size = 'large', title }) => {
  var iconData = data[name] ? data[name] : {};

  return (
    <svg
      className={`icon icon-${name} icon--${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width={iconData.width}
      height={iconData.height}
      viewBox={`0 0 ${iconData.width} ${iconData.height}`}>
      <title>{title || name}</title>
      <path d={iconData.path}/>
    </svg>
  );
};

SimpleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large'])
};

export default SimpleIcon;
