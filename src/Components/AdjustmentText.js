import React from 'react';
import { AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import TextField from './TextField';
import { setColor, setFontSize } from '../actions/buttonStyle';
import { setText } from '../actions/buttonText';
import '../styles/Adjustments.scss';

const AdjustmentSection = ({
  buttonStyle,
  buttonText,
  setColor,
  setFontSize,
  setText,
}) => {
  const { color } = buttonStyle;
  const { text } = buttonText;

  const handleButtonTextChange = (e) => {
    setText(e.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color.rgb);
  };

  return (
    <AccordionItem title='Text'>
      <section className='adjustSection'>
        <TextField
          fieldName='buttonText'
          fieldText='Text'
          value={text}
          placeHolder='Button Text'
          handleTextFieldChange={handleButtonTextChange}
        />
        <section className='adjustColor'>
          <ColorPicker
            colorField={color}
            handleColorChange={handleColorChange}
          />
        </section>
        <RangeSlider
          field='textSize'
          changeHandler={setFontSize}
          label='Text size'
          initial={30}
          min={1}
          max={50}
        />
      </section>
    </AccordionItem>
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
})(AdjustmentSection);
