import React, { useState } from 'react';
import '../styles/Adjustments.scss';

const RangeSlider = ({
  field,
  changeHandler,
  label,
  initial,
  min,
  max,
  percentageOption,
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
    changeHandler(e.target.value + unit);
  };

  return (
    <div className='adjustmentContainer'>
      <div className='adjustmentLabel'>
        <div className='sliderField'>
          {label && label + ': '}
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
  );
};

export default RangeSlider;
