import React, { Fragment } from 'react';
import { AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import {
  setBorderColor,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
} from '../actions/buttonStyle';

import '../styles/Adjustments.scss';

const AdjustmentBorders = ({
  buttonStyle,
  setBorderColor,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
}) => {
  const { borderColor } = buttonStyle;
  const [lockBorders, toggleLockBorders] = useToggle(true);

  const handleBorderColorChange = (color) => {
    setBorderColor(color.rgb);
  };

  return (
    <AccordionItem title='Borders'>
      <section className='adjustSection'>
        <IconSwitch
          icon='link'
          value={lockBorders}
          valueChange={toggleLockBorders}
          textTrue='Borders linked'
          textFalse='Borders unlinked'
        />
        {lockBorders ? (
          <RangeSlider
            field='borderWidth'
            changeHandler={setBorderWidth}
            label='Thickness'
            initial={1}
            min={0}
            max={25}
          />
        ) : (
          <Fragment>
            <RangeSlider
              field='borderTopWidth'
              changeHandler={setBorderWidthTop}
              label='Top'
              initial={0}
              min={0}
              max={50}
            />
            <RangeSlider
              field='borderRightWidth'
              changeHandler={setBorderWidthRight}
              label='Right'
              initial={0}
              min={0}
              max={50}
            />
            <RangeSlider
              field='borderBottomWidth'
              changeHandler={setBorderWidthBottom}
              label='Bottom'
              initial={0}
              min={0}
              max={50}
            />
            <RangeSlider
              field='borderLeftWidth'
              changeHandler={setBorderWidthLeft}
              label='Left'
              initial={0}
              min={0}
              max={50}
            />
          </Fragment>
        )}

        <section className='adjustColor'>
          <ColorPicker
            colorField={borderColor}
            handleColorChange={handleBorderColorChange}
          />
        </section>
      </section>
    </AccordionItem>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, {
  setBorderColor,
  setBorderWidth,
  setBorderWidthTop,
  setBorderWidthRight,
  setBorderWidthBottom,
  setBorderWidthLeft,
})(AdjustmentBorders);
