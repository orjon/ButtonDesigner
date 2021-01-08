import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
} from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentMargins = ({
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
}) => {
  const [seeMargin, toggleSeeMargin] = useToggle(false);
  const [lockMargins, toggleLockMargins] = useToggle(true);

  return (
    <section className='adjustSection'>
      <IconSwitch
        icon='link'
        value={lockMargins}
        valueChange={toggleLockMargins}
        textTrue='Margins linked'
        textFalse='Margins unlinked'
      />
      {/* <IconSwitch
        icon='visibility'
        value={seeMargin}
        valueChange={toggleSeeMargin}
        textTrue='Visible'
        textFalse='Not visible'
      /> */}

      {lockMargins ? (
        <RangeSlider
          field='margin'
          changeHandler={setMargin}
          initial={50}
          min={0}
          max={500}
        />
      ) : (
        <Fragment>
          <RangeSlider
            field='marginTop'
            changeHandler={setMarginTop}
            label='Top'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='marginRight'
            changeHandler={setMarginRight}
            label='Right'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='marginBottom'
            changeHandler={setMarginBottom}
            label='Bottom'
            initial={0}
            min={0}
            max={50}
          />
          <RangeSlider
            field='marginLeft'
            changeHandler={setMarginLeft}
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
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
})(AdjustmentMargins);
