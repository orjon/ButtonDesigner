import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import TextField from './TextField';
import {
  setHeight,
  setWidth,
  setBackgroundColor,
  setColor,
  setBorderColor,
  setBorder,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
} from '../actions/buttonStyle';
import { setText } from '../actions/buttonText';
import '../styles/Adjustments.scss';

const AdjustmentSection = ({
  buttonStyle,
  buttonText,
  setHeight,
  setWidth,
  setBackgroundColor,
  setColor,
  setBorderColor,
  setBorder,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
  setText,
}) => {
  const { height, width, backgroundColor, color } = buttonStyle;
  const { text } = buttonText;
  const [lockBorders, toggleLockBorders] = useToggle(true);
  const [lockCorners, toggleLockCorners] = useToggle(true);
  // const [seeMargin, toggleSeeMargin] = useToggle(false);
  // const [seePadding, toggleSeePadding] = useToggle(false);
  const [lockMargins, toggleLockMargins] = useToggle(true);
  const [lockPadding, toggleLockPadding] = useToggle(true);

  const handleButtonTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.rgb);
  };

  const handleColorChange = (color) => {
    setColor(color.rgb);
  };

  const handleBorderColorChange = (color) => {
    setBorderColor(color.rgb);
  };

  
  return ()
}

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonText: state.buttonText,
});

export default connect(mapStateToProps, {
  setHeight,
  setWidth,
  setBackgroundColor,
  setColor,
  setBorderColor,
  setBorder,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
  setText,
})(AdjustmentSection);