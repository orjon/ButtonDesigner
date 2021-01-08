import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import { setBackgroundColor } from '../actions/buttonStyle';
import '../styles/Adjustments.scss';

const Adjustments = ({ buttonStyle, setBackgroundColor }) => {
  const { backgroundColor } = buttonStyle;

  return (
    <section className='adjustSection'>
      <ColorPicker
        colorField={backgroundColor}
        handleColorChange={(e) => setBackgroundColor(e.rgb)}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, {
  setBackgroundColor,
})(Adjustments);
