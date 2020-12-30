import React from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ colorField, handleColorChange }) => {
  const styles = reactCSS({
    default: {
      style: {
        width: '500px',
      },

      //   color: {
      //     width: '36px',
      //     height: '14px',
      //     borderRadius: '2px',
      //     background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
      //   },
      //   swatch: {
      //     padding: '5px',
      //     background: '#fff',
      //     borderRadius: '1px',
      //     boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      //     display: 'inline-block',
      //     cursor: 'pointer',
      //   },
      //   popover: {
      //     position: 'absolute',
      //     zIndex: '2',
      //   },
      //   cover: {
      //     position: 'fixed',
      //     top: '0px',
      //     right: '0px',
      //     bottom: '0px',
      //     left: '0px',
      //   },
    },
  });
  return (
    <ChromePicker
      width={'100%'}
      background-color={'black'}
      color={colorField}
      onChangeComplete={handleColorChange}
    />
  );
};

export default ColorPicker;
