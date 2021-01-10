import React from 'react';

const DropDown = ({ fieldName, fieldText, value, values, handleChange }) => {
  let valueOptions = values.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className='adjustmentContainer'>
      {fieldText && <div className='adjustmentLabel'>{fieldText}</div>}
      <form>
        <select
          value={value}
          name={fieldName}
          onChange={(e) => handleChange(e.target.value)}
        >
          {valueOptions}
        </select>
      </form>
    </div>
  );
};

export default DropDown;
