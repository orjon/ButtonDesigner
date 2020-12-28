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
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    textSize,
    buttonText,
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
          marginTop: marginTop,
          marginRight: marginRight,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          paddingTop: paddingTop,
          paddingRight: paddingRight,
          paddingBottom: paddingBottom,
          paddingLeft: paddingLeft,
          fontSize: textSize,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonValues: state.buttonValues,
});

export default connect(mapStateToProps, null)(Button);
