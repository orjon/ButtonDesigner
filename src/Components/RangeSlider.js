import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../helpers';
import {
  setHeight,
  setWidth,
  setBorderRadius,
  setTextSize,
} from '../actions/buttonValues';

const RangeSlider = ({
  field,
  initial,
  min,
  max,
  percentageOption,
  setHeight,
  setWidth,
  setBorderRadius,
  setTextSize,
}) => {
  const [sliderValue, setSliderValue] = useState(initial);
  const [usePercentage, setUsePercentage] = useState(false);

  let sliderUnit = 'px';

  if (usePercentage) {
    sliderUnit = '%';
  } else {
    switch (field) {
      case 'height':
      case 'width':
      case 'borderRadius':
        sliderUnit = 'px';
        break;
      case 'textSize':
        sliderUnit = 'pt';
        break;
      default:
        return;
    }
  }

  const handleCheckboxChange = (e) => {
    setUsePercentage(e.target.checked);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    switch (field) {
      case 'height':
        setHeight(e.target.value + sliderUnit);
        break;
      case 'width':
        setWidth(e.target.value + sliderUnit);
        break;
      case 'borderRadius':
        setBorderRadius(e.target.value + sliderUnit);
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
      <div className='sliderContainer'>
        <div className='sliderLabel'>
          <div className='sliderField'>
            {' '}
            {capitalize(field)}:{' '}
            <span id='sliderValue'>
              {sliderValue}
              {sliderUnit}
            </span>
          </div>
          {percentageOption && (
            <div className='percentageOption'>
              <form>
                <label for='percentage'>
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
  setTextSize,
})(RangeSlider);
