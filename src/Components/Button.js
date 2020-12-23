import React from 'react';
import { connect } from 'react-redux';

const Button = ({ buttonValues }) => {
  const { height, width, borderRadius, textSize } = buttonValues;
  return (
    <div className='buttonContainer'>
      <button
        id='button'
        style={{
          backgroundColor: 'red',
          height: height,
          width: width,
          borderRadius: borderRadius,
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
