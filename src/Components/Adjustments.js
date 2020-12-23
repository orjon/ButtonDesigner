import React from 'react';
import RangeSlider from './RangeSlider';

const Adjustments = () => {
  return (
    <div className='adjustments'>
      <h3>Adjustments</h3>

      <section className='adjustSection adjustSize'>
        <h4>Button Size</h4>
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
      <section className='adjustSection adjustSize'>
        <h4>Corner Radii</h4>
        {/* <form>
          <label for='percentage'>
            <strong>%</strong>&nbsp;
          </label>
          <input
            style={{ verticalAlign: 'bottom' }}
            type='checkbox'
            id='percentage'
            name='usePercentage'
            // checked={usePercentage}
            // onChange={handleCheckboxChange}
          />
        </form> */}
        <RangeSlider
          field='borderRadius'
          percentageOption={true}
          initial={50}
          min={0}
          max={500}
        />
      </section>
      <section className='adjustSection adjustSize'>
        <h4>Text</h4>
        <RangeSlider field='textSize' initial={30} min={1} max={50} />
      </section>
      <section className='adjustSection adjustSize'>
        <h4>Margin &amp; Padding</h4>
        <RangeSlider field='textSize' initial={30} min={1} max={50} />
      </section>
    </div>
  );
};

export default Adjustments;
