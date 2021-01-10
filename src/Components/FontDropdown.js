import React, { useState } from 'react';
import FontPicker from 'font-picker-react';
import '../styles/FontDropdown.scss';

const FontDropdown = () => {
  const [activeFontFamily, setActiveFontFamily] = useState('Open Sans');

  return (
    <div className='adjustmentContainer'>
      <FontPicker
        apiKey={process.env.REACT_APP_GOOGLE_FONTS_KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
      />
      {/* <p className='apply-font'>The font will be applied to this text.</p> */}
    </div>
  );
};

export default FontDropdown;
