import React from 'react';
import { AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';

import RangeSlider from './RangeSlider';

import { setHeight, setWidth } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentSection = ({ setHeight, setWidth }) => {
  return (
    <AccordionItem title='Size'>
      <section className='adjustSection adjustSize'>
        <RangeSlider
          field='height'
          changeHandler={setHeight}
          label='Height'
          percentageOption={false}
          initial={30}
          min={1}
          max={200}
        />
        <RangeSlider
          field='width'
          changeHandler={setWidth}
          label='Width'
          percentageOption={false}
          initial={100}
          min={1}
          max={500}
        />
      </section>
    </AccordionItem>
  );
};

export default connect(null, {
  setHeight,
  setWidth,
})(AdjustmentSection);
