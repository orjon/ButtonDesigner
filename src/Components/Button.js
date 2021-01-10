import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/Button.scss';

const Button = ({ buttonStyle, buttonStyleHover, buttonProperties }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id='previewButton'
      className='apply-font'
      style={hovered ? buttonStyleHover : buttonStyle}
    >
      {buttonProperties.text}
    </button>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonStyleHover: state.buttonStyleHover,
  buttonProperties: state.buttonProperties,
});

export default connect(mapStateToProps, null)(Button);
