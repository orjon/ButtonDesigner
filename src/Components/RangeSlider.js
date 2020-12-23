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
  percentage,
  setHeight,
  setWidth,
  setBorderRadius,
  setTextSize,
}) => {
  const [sliderValue, setSliderValue] = useState(initial);

  let sliderUnit = 'px';

  if (percentage) {
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

  const handleChange = (e) => {
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
          {percentage && (
            <div className='percentageOption'>
              <label for='percentage'>
                <strong>%</strong>&nbsp;
              </label>
              <input
                style={{ verticalAlign: 'bottom' }}
                type='checkbox'
                id='percentage'
                name='usePercentage'
                value='false'
              />
            </div>
          )}
        </div>
        {percentage ? (
          <input
            className='slider'
            type='range'
            min={0}
            max={100}
            defaultValue={sliderValue}
            onChange={handleChange}
          />
        ) : (
          <input
            className='slider'
            type='range'
            min={min}
            max={max}
            defaultValue={sliderValue}
            onChange={handleChange}
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
