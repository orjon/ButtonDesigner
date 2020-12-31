import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ colorField, handleColorChange }) => {
  return (
    <ChromePicker
      width={'100%'}
      color={colorField}
      onChangeComplete={handleColorChange}
    />
  );
};

export default ColorPicker;
