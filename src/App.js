import RangeSlider from './Components/RangeSlider';
import Button from './Components/Button';
import './styles/App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <body className='flexColumnCenter'>
          <div className='buttonMaker'>
            <header>
              <h1>Button Maker</h1>
            </header>

            <main>
              <div className='adjustments'>
                <h3>Adjustments</h3>

                <section className='adjustSection adjustSize'>
                  <h4>Button Size</h4>
                  <RangeSlider field='height' initial={30} min={1} max={200} />
                  <RangeSlider field='width' initial={100} min={1} max={500} />
                  <RangeSlider
                    field='borderRadius'
                    initial={50}
                    min={0}
                    max={250}
                    percentage='true'
                  />
                </section>
                <section className='adjustSection adjustSize'>
                  <h4>Text</h4>
                  <RangeSlider field='textSize' initial={30} min={1} max={50} />
                </section>
                <section className='adjustSection adjustSize'>
                  <h4>Margin &amp; Padding</h4>
                  <RangeSlider field='textSize' initial={30} min={1} max={50} />
                </section>
              </div>
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
}

export default App;
