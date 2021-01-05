import React from 'react';
import { Accordion } from 'react-light-accordion';
import AdjustmentSize from './AdjustmentSize';
import AdjustmentColor from './AdjustmentColor';
import AdjustmentText from './AdjustmentText';
import AdjustmentBorders from './AdjustmentBorders';
import AdjustmentCorners from './AdjustmentCorners';
import AdjustmentMargins from './AdjustmentMargins';
import AdjustmentPadding from './AdjustmentPadding';
import '../styles/Adjustments.scss';

const Adjustments = () => {
  return (
    <div className='Adjustments'>
      <div className='windowTitle'>Adjustments</div>
      <Accordion atomic={true}>
        <AdjustmentSize />
        <AdjustmentColor />
        <AdjustmentText />
        <AdjustmentBorders />
        <AdjustmentCorners />
        <AdjustmentMargins />
        <AdjustmentPadding />
      </Accordion>
    </div>
  );
};

export default Adjustments;
