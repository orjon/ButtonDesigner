import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOffIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const IconSwitch = ({ icon, value, toggleValue, textTrue, textFalse }) => {
  let selectedIcon = null;
  let selectedIconOff = null;

  switch (icon) {
    case 'link':
      selectedIcon = (
        <LinkIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      selectedIconOff = (
        <LinkOffIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      break;

    case 'visibility':
      selectedIcon = (
        <VisibilityIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      selectedIconOff = (
        <VisibilityOffIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      break;

    case 'checkbox':
      selectedIcon = (
        <CheckBoxIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      selectedIconOff = (
        <CheckBoxOffIcon style={{ fontSize: 16, verticalAlign: 'bottom' }} />
      );
      break;
  }

  const handleClick = (e) => {
    e.stopPropagation(); //  <------ Here is the magic
    toggleValue();
  };

  return (
    <div className='adjustmentContainer'>
      <div className='iconSwitch'>
        {value ? (
          <div onClick={handleClick}>
            {selectedIcon}
            &nbsp;{textTrue}
          </div>
        ) : (
          <div onClick={handleClick}>
            {selectedIconOff}
            &nbsp;{textFalse}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconSwitch;
