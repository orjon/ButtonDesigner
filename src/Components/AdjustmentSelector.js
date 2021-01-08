import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import TextField from './TextField';
import { setColor, setFontSize } from '../actions/buttonStyle';
import { setText } from '../actions/buttonText';
import '../styles/Adjustments.scss';

const AdjustmentSelector = ({ buttonStyle, buttonText, setText }) => {
  const { color } = buttonStyle;
  const { text } = buttonText;

  return (
    <section className='adjustSection'>
      <TextField
        fieldName='buttonClass'
        // fieldText='Text'
        value={text}
        placeHolder='.class'
        handleTextFieldChange={(e) => setText(e.target.value)}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonText: state.buttonText,
});

export default connect(mapStateToProps, {
  setColor,
  setFontSize,
  setText,
})(AdjustmentSelector);
