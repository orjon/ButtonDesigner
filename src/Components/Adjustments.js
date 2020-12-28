import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import useToggle from '../helpers/useToggle';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import '../styles/Adjustments.scss';

const Adjustments = () => {
  const [lockCorners, toggleLockCorners] = useToggle(true);
  // const [seeMargin, toggleSeeMargin] = useToggle(false);
  // const [seePadding, toggleSeePadding] = useToggle(false);
  const [lockMargins, toggleLockMargins] = useToggle(true);
  const [lockPadding, toggleLockPadding] = useToggle(true);

  return (
    <div className='Adjustments'>
      <h3>Adjustments</h3>
      <Accordion atomic={false}>
        <AccordionItem title='Button Size'>
          <section className='adjustSection adjustSize'>
            <RangeSlider
              field='height'
              label='Height'
              percentageOption={false}
              initial={30}
              min={1}
              max={200}
            />
            <RangeSlider
              field='width'
              label='Width'
              percentageOption={false}
              initial={100}
              min={1}
              max={500}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Corner Radii'>
          <section className='adjustSection adjustSize'>
            <IconSwitch
              icon='link'
              value={lockCorners}
              valueChange={toggleLockCorners}
              textTrue='Linked corners'
              textFalse='Unlinked corners'
            />
            {lockCorners ? (
              <RangeSlider
                field='borderRadius'
                label='Corner radii'
                percentageOption={true}
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='borderRadiusTopLeft'
                  label='Top-left'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusTopRight'
                  label='Top-right'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomRight'
                  label='Bottom-right'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomLeft'
                  label='Bottom-left'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
        <AccordionItem title='Text'>
          <section className='adjustSection adjustSize'>
            <RangeSlider
              field='textSize'
              label='Text size'
              initial={30}
              min={1}
              max={50}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Margin'>
          <section className='adjustSection adjustSize'>
            {/* <IconSwitch
              icon='visibility'
              value={seeMargin}
              valueChange={toggleSeeMargin}
              textTrue='Visible'
              textFalse='Not visible'
            /> */}
            <IconSwitch
              icon='link'
              value={lockMargins}
              valueChange={toggleLockMargins}
              textTrue='Margins linked'
              textFalse='Margins unlinked'
            />
            {lockMargins ? (
              <RangeSlider
                field='margin'
                label='Margins'
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='marginTop'
                  label='Top'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginRight'
                  label='Right'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginBottom'
                  label='Bottom'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginLeft'
                  label='Left'
                  initial={0}
                  min={0}
                  max={50}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
        <AccordionItem title='Padding'>
          <section className='adjustSection adjustSize'>
            {/* <IconSwitch
              icon='visibility'
              value={seePadding}
              valueChange={toggleSeePadding}
              textTrue='Visible'
              textFalse='Not visible'
            /> */}
            <IconSwitch
              icon='link'
              value={lockPadding}
              valueChange={toggleLockPadding}
              textTrue='Padding linked'
              textFalse='Padding unlinked'
            />
            {lockPadding ? (
              <RangeSlider
                field='padding'
                label='Padding'
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='paddingTop'
                  label='Top'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingRight'
                  label='Right'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingBottom'
                  label='Bottom'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingLeft'
                  label='Left'
                  initial={0}
                  min={0}
                  max={50}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Adjustments;
