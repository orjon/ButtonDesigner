import React from 'react';
import { connect } from 'react-redux';
import '../styles/Button.scss';

const Button = ({ buttonStyle, buttonProperties }) => {
  return (
    <button id='previewButton' className='apply-font' style={buttonStyle}>
      {buttonProperties.text}
    </button>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonProperties: state.buttonProperties,
});

export default connect(mapStateToProps, null)(Button);
