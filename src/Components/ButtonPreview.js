import React from 'react';
import Button from './Button';
// import ButtonTest from './ButtonTest';
import '../styles/ButtonPreview.scss';

const ButtonPreview = () => {
  return (
    <div className='ButtonPreview'>
      <div className='windowTitle'>Preview</div>
      <div className='buttonContainer'>
        <Button />
        {/* <ButtonTest /> */}
      </div>
    </div>
  );
};

export default ButtonPreview;
