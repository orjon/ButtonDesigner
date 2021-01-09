import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RangeSlider from './RangeSlider';
import ColorPicker from './ColorPicker';
import { setTextShadow } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const AdjustmentTextShadow = ({ setTextShadow }) => {
  const [hOffset, setHOffSet] = useState('0px');
  const [vOffset, setVOffSet] = useState('0px');
  const [blur, setBlur] = useState('0px');
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });

  useEffect(() => {
    //Check if these values are all 0.
    const values = [hOffset, vOffset, blur];
    const numberValues = values.map((value) =>
      parseInt(value.replace(/\D/g, ''))
    );
    if (!numberValues.some((value) => value !== 0)) {
      setTextShadow('0');
    } else {
      setTextShadow({ hOffset, vOffset, blur, color });
    }
  }, [setTextShadow, hOffset, vOffset, blur, color]);

  return (
    <section className='adjustSection'>
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
      <ColorPicker
        colorField={`rgba(${color.r},${color.g},${color.b},${color.a})`}
        handleColorChange={(e) => setColor(e.rgb)}
      />
    </section>
  );
};

export default connect(null, {
  setTextShadow,
})(AdjustmentTextShadow);
