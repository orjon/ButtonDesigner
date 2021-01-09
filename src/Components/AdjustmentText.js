import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import TextField from './TextField';
import { setColor, setFontSize } from '../actions/buttonStyle';
import { setText } from '../actions/buttonProperties';
import '../styles/Adjustments.scss';

const AdjustmentSection = ({
  buttonStyle,
  buttonProperties,
  setColor,
  setFontSize,
  setText,
}) => {
  const { color } = buttonStyle;
  const { text } = buttonProperties;

  return (
    <section className='adjustSection'>
      <TextField
        fieldName='buttonText'
        value={text}
        placeHolder='Button Text'
        handleTextFieldChange={(e) => setText(e.target.value)}
      />
      <ColorPicker
        colorField={color}
        handleColorChange={(e) => setColor(e.rgb)}
      />
      <RangeSlider
        field='textSize'
        changeHandler={setFontSize}
        label='Size'
        initial={30}
        min={1}
        max={50}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonProperties: state.buttonProperties,
});

export default connect(mapStateToProps, {
  setColor,
  setFontSize,
  setText,
})(AdjustmentSection);
