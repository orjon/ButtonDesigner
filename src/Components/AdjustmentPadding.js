import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
} from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const Adjustments = ({
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
}) => {
  // const [seePadding, toggleSeePadding] = useToggle(false);
  const [lockPadding, toggleLockPadding] = useToggle(true);

  return (
    <section className='adjustSection'>
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
        toggleValue={toggleLockPadding}
        textTrue='Padding linked'
        textFalse='Padding unlinked'
      />
      {lockPadding ? (
        <RangeSlider
          field='padding'
          changeHandler={setPadding}
          initial={50}
          min={0}
          max={500}
        />
      ) : (
        <Fragment>
          <RangeSlider
            field='paddingTop'
            changeHandler={setPaddingTop}
            label='Top'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='paddingRight'
            changeHandler={setPaddingRight}
            label='Right'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='paddingBottom'
            changeHandler={setPaddingBottom}
            label='Bottom'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='paddingLeft'
            changeHandler={setPaddingLeft}
            label='Left'
            initial={0}
            min={0}
            max={50}
          />
        </Fragment>
      )}
    </section>
  );
};

export default connect(null, {
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
})(Adjustments);
