import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ colorField, handleColorChange }) => {
  return (
    <div className='adjustmentContainer'>
      <section className='adjustColor'>
        <ChromePicker
          width={'100%'}
          color={colorField}
          onChangeComplete={handleColorChange}
        />
      </section>
    </div>
  );
};

export default ColorPicker;
