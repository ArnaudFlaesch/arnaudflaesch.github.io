import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from "./components/Header";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="Website">
    <React.StrictMode>
      <Header />
      <Body />
      <Footer />
    </React.StrictMode>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
