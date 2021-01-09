import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import DropDown from './DropDown';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setBorderStyle,
  setBorderStyleTop,
  setBorderStyleRight,
  setBorderStyleBottom,
  setBorderStyleLeft,
  setBorderColor,
  setBorderColorTop,
  setBorderColorRight,
  setBorderColorBottom,
  setBorderColorLeft,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
} from '../actions/buttonStyle';

import '../styles/Adjustments.scss';

const AdjustmentBorders = ({
  buttonStyle,
  setBorderStyle,
  setBorderStyleTop,
  setBorderStyleRight,
  setBorderStyleBottom,
  setBorderStyleLeft,
  setBorderColor,
  setBorderColorTop,
  setBorderColorRight,
  setBorderColorBottom,
  setBorderColorLeft,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
}) => {
  const {
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
  } = buttonStyle;
  const [lockBorders, toggleLockBorders] = useToggle(true);
  const borderStyles = [
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ];

  return (
    <section className='adjustSection'>
      <IconSwitch
        icon='link'
        value={lockBorders}
        toggleValue={toggleLockBorders}
        textTrue='Borders linked'
        textFalse='Borders unlinked'
      />
      {lockBorders ? (
        <Fragment>
          <RangeSlider
            field='borderWidth'
            changeHandler={setBorderWidth}
            initial={1}
            min={0}
            max={25}
          />
          <DropDown
            fieldName='dropdown1'
            value={borderTopStyle}
            values={borderStyles}
            handleChange={setBorderStyle}
          />
          <ColorPicker
            colorField={borderTopColor}
            handleColorChange={(e) => setBorderColor(e.rgb)}
          />
        </Fragment>
      ) : (
        <Fragment>
          <RangeSlider
            field='borderTopWidth'
            changeHandler={setBorderWidthTop}
            label='Top'
            initial={0}
            min={0}
            max={50}
          />
          <DropDown
            fieldName='dropdown1'
            value={borderTopStyle}
            values={borderStyles}
            handleChange={setBorderStyleTop}
          />
          <ColorPicker
            colorField={borderTopColor}
            handleColorChange={(e) => setBorderColorTop(e.rgb)}
          />
          <div className='adjustDivider' />
          <RangeSlider
            field='borderRightWidth'
            changeHandler={setBorderWidthRight}
            label='Right'
            initial={0}
            min={0}
            max={50}
          />
          <DropDown
            fieldName='dropdown1'
            value={borderRightStyle}
            values={borderStyles}
            handleChange={setBorderStyleRight}
          />
          <ColorPicker
            colorField={borderRightColor}
            handleColorChange={(e) => setBorderColorRight(e.rgb)}
          />
          <div className='adjustDivider' />
          <RangeSlider
            field='borderBottomWidth'
            changeHandler={setBorderWidthBottom}
            label='Bottom'
            initial={0}
            min={0}
            max={50}
          />
          <DropDown
            fieldName='dropdown1'
            value={borderBottomStyle}
            values={borderStyles}
            handleChange={setBorderStyleBottom}
          />
          <ColorPicker
            colorField={borderBottomColor}
            handleColorChange={(e) => setBorderColorBottom(e.rgb)}
          />
          <div className='adjustDivider' />
          <RangeSlider
            field='borderLeftWidth'
            changeHandler={setBorderWidthLeft}
            label='Left'
            initial={0}
            min={0}
            max={50}
          />
          <DropDown
            fieldName='dropdown1'
            value={borderLeftStyle}
            values={borderStyles}
            handleChange={setBorderStyleLeft}
          />
          <ColorPicker
            colorField={borderLeftColor}
            handleColorChange={(e) => setBorderColorLeft(e.rgb)}
          />
        </Fragment>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, {
  setBorderStyle,
  setBorderStyleTop,
  setBorderStyleRight,
  setBorderStyleBottom,
  setBorderStyleLeft,
  setBorderColor,
  setBorderColorTop,
  setBorderColorRight,
  setBorderColorBottom,
  setBorderColorLeft,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
})(AdjustmentBorders);
