import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
} from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentCorners = ({
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
}) => {
  const [lockCorners, toggleLockCorners] = useToggle(true);

  return (
    <section className='adjustSection'>
      <IconSwitch
        icon='link'
        value={lockCorners}
        toggleValue={toggleLockCorners}
        textTrue='Corners linked'
        textFalse='Corners unlinked'
      />
      {lockCorners ? (
        <RangeSlider
          field='borderRadius'
          changeHandler={setBorderRadius}
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
            changeHandler={setBorderRadiusTopLeft}
            label='Top-left'
            percentageOption={true}
            initial={50}
            min={0}
            max={500}
          />
          <RangeSlider
            field='borderRadiusTopRight'
            changeHandler={setBorderRadiusTopRight}
            label='Top-right'
            percentageOption={true}
            initial={50}
            min={0}
            max={500}
          />
          <RangeSlider
            field='borderRadiusBottomRight'
            changeHandler={setBorderRadiusBottomRight}
            label='Bottom-right'
            percentageOption={true}
            initial={50}
            min={0}
            max={500}
          />
          <RangeSlider
            field='borderRadiusBottomLeft'
            changeHandler={setBorderRadiusBottomLeft}
            label='Bottom-left'
            percentageOption={true}
            initial={50}
            min={0}
            max={500}
          />
        </Fragment>
      )}
    </section>
  );
};

export default connect(null, {
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
})(AdjustmentCorners);
