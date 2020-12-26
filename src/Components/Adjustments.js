import React, { Fragment, useState } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import LinkIcon from '@material-ui/icons/Link';
import RangeSlider from './RangeSlider';
import '../styles/Adjustments.scss';

const Adjustments = () => {
  const [lockCorners, setLockCorners] = useState(true);
  const handleLockCorners = (e) => {
    setLockCorners(e.target.checked);
  };

  return (
    <div className='adjustments'>
      <h3>Adjustments</h3>
      <Accordion atomic={false}>
        <AccordionItem title='Button Size'>
          <section className='adjustSection adjustSize'>
            <RangeSlider
              field='height'
              percentageOption={false}
              initial={30}
              min={1}
              max={200}
            />
            <RangeSlider
              field='width'
              percentageOption={false}
              initial={100}
              min={1}
              max={500}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Corner Radii'>
          <section className='adjustSection adjustSize'>
            <form className='adjustmentContainer'>
              <div className='checkbox'>
                <input
                  style={{ verticalAlign: 'bottom' }}
                  type='checkbox'
                  id='percentage'
                  name='usePercentage'
                  checked={lockCorners}
                  onChange={handleLockCorners}
                />
                <label htmlFor='percentage'>
                  <LinkIcon />
                  &nbsp;Lock corners
                </label>
              </div>
            </form>
            {lockCorners ? (
              <RangeSlider
                field='borderRadius'
                percentageOption={true}
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='borderRadiusTopLeft'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusTopRight'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomRight'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomLeft'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>

        <section className='adjustSection adjustSize'>
          <h4>Text</h4>
          <RangeSlider field='textSize' initial={30} min={1} max={50} />
        </section>
        <section className='adjustSection adjustSize'>
          <h4>Margin &amp; Padding</h4>
          <RangeSlider field='textSize' initial={30} min={1} max={50} />
        </section>
      </Accordion>
    </div>
  );
};

export default Adjustments;
