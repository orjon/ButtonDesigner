import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import AdjustmentSize from './AdjustmentSize';
import AdjustmentColor from './AdjustmentColor';
import AdjustmentText from './AdjustmentText';
import AdjustmentBorders from './AdjustmentBorders';
// import AdjustmentShadow from './AdjustmentShadow';
import AdjustmentCorners from './AdjustmentCorners';
// import AdjustmentMargins from './AdjustmentMargins';
// import AdjustmentPadding from './AdjustmentPadding';
import RangeSlider from './RangeSlider';
import { setHeight, setWidth } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const Adjustments = ({ setHeight, setWidth }) => {
  return (
    <div className='Adjustments'>
      <div className='windowTitle'>Adjustments</div>
      <Accordion atomic={true}>
        {/* <AccordionItem title='Selector'>
          <AdjustmentSelector />
        </AccordionItem> */}
        <AccordionItem className='active' title='Size'>
          <AdjustmentSize />
        </AccordionItem>
        <AccordionItem title='Color'>
          <AdjustmentColor />
        </AccordionItem>
        <AccordionItem title='Text'>
          <AdjustmentText />
        </AccordionItem>
        <AccordionItem title='Corners'>
          <AdjustmentCorners />
        </AccordionItem>
        <AccordionItem title='Border'>
          <AdjustmentBorders />
        </AccordionItem>
        {/* <AccordionItem title='Shadow / Glow'>
          <AdjustmentShadow />
        </AccordionItem>
        <AccordionItem title='Margin'>
          <AdjustmentMargins />
        </AccordionItem>
        <AccordionItem title='Padding'>
          <AdjustmentPadding />
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Adjustments;
