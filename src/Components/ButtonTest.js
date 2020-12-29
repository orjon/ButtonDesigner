import React from 'react';
import { connect } from 'react-redux';
import '../styles/ButtonTest.scss';

const ButtonTest = ({ buttonText }) => {
  return <button>{buttonText.text}</button>;
};

const mapStateToProps = (state) => ({
  buttonText: state.buttonText,
});

export default connect(mapStateToProps, null)(ButtonTest);
