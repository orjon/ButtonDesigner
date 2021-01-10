import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import TextField from './TextField';
import FontDropdown from './FontDropdown';
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
      <FontDropdown />
      <RangeSlider
        field='textSize'
        changeHandler={setFontSize}
        label='Size'
        initial={12}
        min={1}
        max={50}
      />
      <ColorPicker
        colorField={color}
        handleColorChange={(e) => setColor(e.rgb)}
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
