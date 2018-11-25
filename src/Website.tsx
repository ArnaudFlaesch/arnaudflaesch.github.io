import * as React from 'react';
import './Website.css';

import logo from './logo.svg';

class Website extends React.Component {
  public render() {
    return (
      <div className="Website">
        <header>
          <img src={logo} className="Website-logo" alt="logo" />
          <h1>Site en construction</h1>
        </header>
      </div>
    );
  }
}

export default Website;
