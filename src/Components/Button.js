import React from 'react';
import { connect } from 'react-redux';
import '../styles/Button.scss';

const Button = ({ buttonStyle, buttonText }) => {
  return (
    <button id='previewButton' style={buttonStyle}>
      {buttonText.text}
    </button>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonText: state.buttonText,
});

export default connect(mapStateToProps, null)(Button);
