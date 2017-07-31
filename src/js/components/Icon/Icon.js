import React from 'react';
import PropTypes from 'prop-types';
import data from './data';

export const SimpleIcon = ({ name }) => {
  var iconData = data[name] ? data[name] : {};

  return (
    <svg
      className={`icon icon-${name}`}
      xmlns="http://www.w3.org/2000/svg"
      width={iconData.width}
      height={iconData.height}
      viewBox={`0 0 ${iconData.width} ${iconData.height}`}>
      <path d={iconData.path}/>
    </svg>
  );
};

SimpleIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export const LoadingIcon = () => (
  <svg
    className="icon icon-loading"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 50 50">
    <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"/>
    </path>
  </svg>
);

export default SimpleIcon;
