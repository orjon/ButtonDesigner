import React from 'react';
import Adjustments from './Components/Adjustments';
import ButtonPreview from './Components/ButtonPreview';
import './styles/App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = (buttonValues) => {
  console.log(store);
  return (
    <Provider store={store}>
      <div className='ButtonMaker'>
        <header>
          <h1>Button Maker</h1>
        </header>

        <main>
          <Adjustments />
          <ButtonPreview />
        </main>
      </div>
    </Provider>
  );
};

export default App;
