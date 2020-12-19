window.addEventListener('DOMContentLoaded', () => {
  const settingHeight = document.getElementById('settingHeight');
  const settingWidth = document.getElementById('settingWidth');
  const settingRadius = document.getElementById('settingRadius');

  const valueHeight = document.getElementById('valueHeight');
  const valueWidth = document.getElementById('valueWidth');

  const button = document.getElementById('button');

  let height = 30;
  let width = 100;
  let borderRadius = 5;

  settingHeight.addEventListener('change', (e) => {
    height = e.target.value + 'px';
    button.style.height = height;
    valueHeight.innerHTML = height;
    // console.log('Height: ' + height);
  });

  settingWidth.addEventListener('change', (e) => {
    width = e.target.value + 'px';
    button.style.width = width;
    valueWidth.innerHTML = width;
    // console.log('Width: ' + width);
  });

  settingBorderRadius.addEventListener('change', (e) => {
    borderRadius = e.target.value + 'px';
    button.style.borderRadius = borderRadius;
    valueBorderRadius.innerHTML = borderRadius;
  });

  // const wavAfter = document.querySelector('.afterWav');

  // const buttons = document.querySelectorAll('.button');

  // const buttonAfter = document.querySelector('.after');

  // helmets.addEventListener('mousedown', (e) => {
  //   console.log('reset');
  //   location.reload();
  // });

  // buttons.forEach((name) => {
  //   name.addEventListener('mouseout', (event) => {
  //     event.target.classList.remove('clicked');
  //   });
  //   name.addEventListener('mouseup', (event) => {
  //     event.target.classList.remove('clicked');
  //   });
  //   name.addEventListener('mousedown', (event) => {
  //     event.target.classList.add('clicked');
  //   });
  // });

  // buttonMakeit.addEventListener('mousedown', () => {
  //   wavMakeit.currentTime = 0;
  //   wavMakeit.playbackRate = speed;
  //   wavMakeit.play();
  // });
});
