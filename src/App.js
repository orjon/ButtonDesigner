import React from 'react';
import Adjustments from './Components/Adjustments';
import Button from './Components/Button';
import './styles/App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = (buttonValues) => {
  console.log(store);
  return (
    <Provider store={store}>
      <div className='App'>
        <body className='flexColumnCenter'>
          <div className='buttonMaker'>
            <header>
              <h1>Button Maker</h1>
            </header>

            <main>
              <Adjustments />
              <div className='buttonPreview'>
                <h3>Preview</h3>
                <Button />
              </div>
            </main>
          </div>
        </body>
      </div>
    </Provider>
  );
};

export default App;
