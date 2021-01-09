import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RangeSlider from './RangeSlider';
import useToggle from '../helpers/useToggle';
import ColorPicker from './ColorPicker';
import IconSwitch from './IconSwitch';
import { setBoxShadow } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentBoxShadow = ({ setBoxShadow }) => {
  const [inset, toggleInset] = useToggle(false);
  const [hOffset, setHOffSet] = useState('0px');
  const [vOffset, setVOffSet] = useState('0px');
  const [blur, setBlur] = useState('0px');
  const [spread, setSpread] = useState('0px');
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });

  useEffect(() => {
    //Check if these values are all 0.
    const values = [hOffset, vOffset, blur, spread];
    const numberValues = values.map((value) =>
      parseInt(value.replace(/\D/g, ''))
    );
    if (!numberValues.some((value) => value !== 0)) {
      setBoxShadow('0');
    } else {
      setBoxShadow({ hOffset, inset, vOffset, blur, spread, color });
    }
  }, [setBoxShadow, inset, hOffset, vOffset, blur, spread, color]);

  return (
    <section className='adjustSection'>
      <IconSwitch
        icon='checkbox'
        value={inset}
        toggleValue={toggleInset}
        textTrue='Inset'
        textFalse='Inset'
      />
      <RangeSlider
        changeHandler={setHOffSet}
        label='X Offset'
        initial={0}
        min={0}
        max={200}
      />
      <RangeSlider
        changeHandler={setVOffSet}
        label='Y OffSet'
        initial={0}
        min={0}
        max={200}
      />
      <RangeSlider
        changeHandler={setBlur}
        label='Blur'
        initial={0}
        min={0}
        max={200}
      />
      <RangeSlider
        changeHandler={setSpread}
        label='Spread'
        initial={0}
        min={0}
        max={200}
      />
      <ColorPicker
        colorField={`rgba(${color.r},${color.g},${color.b},${color.a})`}
        handleColorChange={(e) => setColor(e.rgb)}
      />
    </section>
  );
};

export default connect(null, {
  setBoxShadow,
})(AdjustmentBoxShadow);
