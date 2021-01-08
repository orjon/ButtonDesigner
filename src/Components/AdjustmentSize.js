import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import RangeSlider from './RangeSlider';

import { setHeight, setWidth } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentSection = ({ setHeight, setWidth }) => {
  return (
    <section className='adjustSection'>
      <RangeSlider
        field='height'
        changeHandler={setHeight}
        label='Height'
        percentageOption={false}
        initial={30}
        min={1}
        max={500}
      />
      <RangeSlider
        field='width'
        changeHandler={setWidth}
        label='Width'
        percentageOption={false}
        initial={200}
        min={1}
        max={500}
      />
    </section>
  );
};

export default connect(null, {
  setHeight,
  setWidth,
})(AdjustmentSection);
