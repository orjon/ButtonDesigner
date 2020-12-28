import React from 'react';

const TextField = ({
  fieldName,
  fieldText,
  placeHolder,
  value,
  handleTextFieldChange,
}) => {
  return (
    <div className='adjustmentContainer'>
      <div className='adjustmentLabel'>{fieldText}:</div>
      <form>
        <input
          className='textField'
          // id='username'
          name={fieldName}
          value={value}
          onChange={(e) => handleTextFieldChange(e)}
          type='text'
          placeholder={placeHolder}
        />
      </form>
    </div>
  );
};

export default TextField;