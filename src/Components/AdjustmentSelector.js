import React from 'react';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import TextField from './TextField';
import IconSwitch from './IconSwitch';
import { setSelector } from '../actions/buttonProperties';
import '../styles/Adjustments.scss';

const AdjustmentSelector = ({ buttonProperties, setSelector }) => {
  const [id, toggleId] = useToggle(false);
  const { selector } = buttonProperties;

  return (
    <section className='adjustSection'>
      <IconSwitch
        icon='checkbox'
        value={id}
        toggleValue={toggleId}
        textTrue='#id'
        textFalse='#id'
      />
      <TextField
        fieldName='buttonClass'
        value={selector}
        placeHolder='.class'
        handleTextFieldChange={(e) => setSelector(e.target.value)}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  buttonProperties: state.buttonProperties,
});

export default connect(mapStateToProps, {
  setSelector,
})(AdjustmentSelector);
