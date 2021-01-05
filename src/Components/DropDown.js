import React from 'react';

const DropDown = ({
  fieldName,
  fieldText,
  value,
  values,
  handleDropDownChange,
}) => {
  let valueOptions = values.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className='adjustmentContainer'>
      <div className='adjustmentLabel'>{fieldText}:</div>
      <form>
        <select
          value={value}
          name={fieldName}
          onChange={(e) => handleDropDownChange(e)}
        >
          {valueOptions}
        </select>
      </form>
    </div>
  );
};

export default DropDown;
