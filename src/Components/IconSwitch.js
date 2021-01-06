import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const IconSwitch = ({ icon, value, valueChange, textTrue, textFalse }) => {
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
  }

  return (
    <div className='adjustmentContainer'>
      <div className='iconSwitch'>
        {value ? (
          <div onClick={valueChange}>
            {selectedIcon}
            &nbsp;{textTrue}
          </div>
        ) : (
          <div onClick={valueChange}>
            {selectedIconOff}
            &nbsp;{textFalse}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconSwitch;
