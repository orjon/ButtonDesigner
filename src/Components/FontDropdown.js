import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FontPicker from 'font-picker-react';
import { setFontFamily } from '../actions/buttonStyle';
import '../styles/FontDropdown.scss';

const FontDropdown = ({ setFontFamily }) => {
  const [activeFontFamily, setActiveFontFamily] = useState('Open Sans');

  useEffect(() => {
    setFontFamily(activeFontFamily);
  }, [setFontFamily, activeFontFamily]);

  return (
    <div className='adjustmentContainer'>
      <div className='adjustmentLabel'>Font</div>
      <FontPicker
        apiKey={process.env.REACT_APP_GOOGLE_FONTS_KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, { setFontFamily })(FontDropdown);
