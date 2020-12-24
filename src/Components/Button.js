import React from 'react';
import { connect } from 'react-redux';
import '../styles/Button.scss';

const Button = ({ buttonValues }) => {
  const {
    height,
    width,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    textSize,
  } = buttonValues;
  return (
    <div className='buttonContainer'>
      <button
        id='button'
        style={{
          backgroundColor: 'red',
          height: height,
          width: width,
          borderTopLeftRadius: borderRadiusTopLeft,
          borderTopRightRadius: borderRadiusTopRight,
          borderBottomLeftRadius: borderRadiusBottomLeft,
          borderBottomRightRadius: borderRadiusBottomRight,
          fontSize: textSize,
        }}
      >
        Button text
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonValues: state.buttonValues,
});

export default connect(mapStateToProps, null)(Button);
