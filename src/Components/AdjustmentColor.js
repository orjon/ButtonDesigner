import React from 'react';
import { AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import { setBackgroundColor } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const Adjustments = ({ buttonStyle, setBackgroundColor }) => {
  const { backgroundColor } = buttonStyle;

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.rgb);
  };

  return (
    <AccordionItem title='Color'>
      <section className='adjustSection adjustColor'>
        <ColorPicker
          colorField={backgroundColor}
          handleColorChange={handleBackgroundColorChange}
        />
      </section>
    </AccordionItem>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, {
  setBackgroundColor,
})(Adjustments);
