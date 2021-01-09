import React, { useState } from 'react';
import FontPicker from 'font-picker-react';

const FontPicker2 = () => {
  const [activeFontFamily, setActiveFontFamily] = useState('Open Sans');

  return (
    <div>
      <FontPicker
        apiKey={process.env.REACT_APP_GOOGLE_FONTS_KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
      />
      <p className='apply-font'>The font will be applied to this text.</p>
    </div>
  );
};

export default FontPicker2;
