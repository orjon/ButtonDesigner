import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import AdjustmentSelector from './AdjustmentSelector';
import AdjustmentSize from './AdjustmentSize';
import AdjustmentColor from './AdjustmentColor';
import AdjustmentText from './AdjustmentText';
import AdjustmentBorders from './AdjustmentBorders';
import AdjustmentBoxShadow from './AdjustmentBoxShadow';
import AdjustmentTextShadow from './AdjustmentTextShadow';
import AdjustmentCorners from './AdjustmentCorners';
// import AdjustmentMargins from './AdjustmentMargins';
// import AdjustmentPadding from './AdjustmentPadding';
import '../styles/Adjustments.scss';

const Adjustments = () => {
  return (
    <div className='Adjustments'>
      <div className='windowTitle'>Adjustments</div>
      <Accordion atomic={true}>
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
        <AccordionItem title='Box-Shadow'>
          <AdjustmentBoxShadow />
        </AccordionItem>
        <AccordionItem title='Text-Shadow'>
          <AdjustmentTextShadow />
        </AccordionItem>
        {/* <AccordionItem title='Margin'>
          <AdjustmentMargins />
        </AccordionItem>
        <AccordionItem title='Padding'>
          <AdjustmentPadding />
        </AccordionItem> */}
        {/* <AccordionItem title='Selector'>
          <AdjustmentSelector />
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Adjustments;
