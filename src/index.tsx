import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.es6.js";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Website from './Website';

ReactDOM.render(
  <Website />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
