window.addEventListener('DOMContentLoaded', () => {
  const settingHeight = document.getElementById('settingHeight');
  const settingWidth = document.getElementById('settingWidth');
  const settingBorderRadius = document.getElementById('settingBorderRadius');

  const valueHeight = document.getElementById('valueHeight');
  const valueWidth = document.getElementById('valueWidth');

  const button = document.getElementById('button');

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let height = 30;
  let width = 100;
  let borderRadius = 5;

  const sliderInput = (sliderField, value, units) => {
    // console.log(sliderField, value, units);
    button.style[sliderField] = value + units;
    valueField = sliderField + 'Value';
    this[valueField].innerHTML = value + units;
  };

  settingHeight.oninput = function () {
    sliderInput('height', this.value, 'px');
  };

  settingWidth.oninput = function () {
    sliderInput('width', this.value, 'px');
  };

  settingBorderRadius.oninput = function () {
    sliderInput('borderRadius', this.value, 'px');
  };
});
