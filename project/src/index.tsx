import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from  './mocks/films';

const Settings = {
  TITLE: 'Her',
  JANRE: 'comedy',
  YEAR: 2000,
  NUMBER_OF_CARDS: 20,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={Settings.TITLE}
      janre={Settings.JANRE}
      year={Settings.YEAR}
      numberOfCards={Settings.NUMBER_OF_CARDS}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
