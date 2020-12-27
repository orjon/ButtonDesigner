import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  setHeight,
  setWidth,
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
  setTextSize,
} from '../actions/buttonValues';
import '../styles/Adjustments.scss';

const RangeSlider = ({
  field,
  label,
  initial,
  min,
  max,
  percentageOption,
  setHeight,
  setWidth,
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
  setTextSize,
}) => {
  const [sliderValue, setSliderValue] = useState(initial);
  const [usePercentage, setUsePercentage] = useState(false);

  let unit = 'px';

  if (usePercentage) {
    unit = '%';
  } else if (field === 'textSize') {
    unit = 'pt';
  } else {
    unit = 'px';
  }

  const handleCheckboxChange = (e) => {
    setUsePercentage(e.target.checked);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    switch (field) {
      case 'height':
        setHeight(e.target.value + unit);
        break;
      case 'width':
        setWidth(e.target.value + unit);
        break;
      case 'borderRadius':
        setBorderRadius(e.target.value + unit);
        break;
      case 'borderRadiusTopLeft':
        setBorderRadiusTopLeft(e.target.value + unit);
        break;
      case 'borderRadiusTopRight':
        setBorderRadiusTopRight(e.target.value + unit);
        break;
      case 'borderRadiusBottomRight':
        setBorderRadiusBottomRight(e.target.value + unit);
        break;
      case 'borderRadiusBottomLeft':
        setBorderRadiusBottomLeft(e.target.value + unit);
        break;
      case 'margin':
        setMargin(e.target.value + unit);
        break;
      case 'marginTop':
        setMarginTop(e.target.value + unit);
        break;
      case 'marginRight':
        setMarginRight(e.target.value + unit);
        break;
      case 'marginBottom':
        setMarginBottom(e.target.value + unit);
        break;
      case 'marginLeft':
        setMarginLeft(e.target.value + unit);
        break;

      case 'padding':
        setPadding(e.target.value + unit);
        break;
      case 'paddingTop':
        setPaddingTop(e.target.value + unit);
        break;
      case 'paddingRight':
        setPaddingRight(e.target.value + unit);
        break;
      case 'paddingBottom':
        setPaddingBottom(e.target.value + unit);
        break;
      case 'paddingLeft':
        setPaddingLeft(e.target.value + unit);
        break;
      case 'textSize':
        setTextSize(e.target.value + 'pt');
        break;
      default:
        return;
    }
  };

  return (
    <Fragment>
      <div className='adjustmentContainer'>
        <div className='adjustmentLabel'>
          <div className='sliderField'>
            {' '}
            {label}:{' '}
            <span id='sliderValue'>
              {sliderValue}
              {unit}
            </span>
          </div>
          {percentageOption && (
            <div className='percentageOption'>
              <form>
                <label htmlFor='percentage'>
                  <strong>%</strong>&nbsp;
                </label>
                <input
                  style={{ verticalAlign: 'bottom' }}
                  type='checkbox'
                  id='percentage'
                  name='usePercentage'
                  checked={usePercentage}
                  onChange={handleCheckboxChange}
                />
              </form>
            </div>
          )}
        </div>
        {usePercentage ? (
          <input
            className='slider'
            type='range'
            min={0}
            max={50}
            defaultValue={sliderValue}
            onChange={handleSliderChange}
          />
        ) : (
          <input
            className='slider'
            type='range'
            min={min}
            max={max}
            defaultValue={sliderValue}
            onChange={handleSliderChange}
          />
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  buttonValues: state.buttonValues,
});

export default connect(mapStateToProps, {
  setHeight,
  setWidth,
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
  setTextSize,
})(RangeSlider);
