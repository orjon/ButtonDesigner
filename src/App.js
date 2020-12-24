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
      <div className='App'>
        <div className='flexColumnCenter'>
          <div className='buttonMaker'>
            <header>
              <h1>Button Maker</h1>
            </header>

            <main>
              <Adjustments />
              <ButtonPreview />
            </main>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
