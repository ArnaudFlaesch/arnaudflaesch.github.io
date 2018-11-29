import * as React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from "./components/Header";
import './Website.css';

const Website: React.FunctionComponent = props => {
  return (

    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Website;
