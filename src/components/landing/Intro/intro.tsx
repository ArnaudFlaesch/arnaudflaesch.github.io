import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import dev from 'assets/illustrations/dev.svg';
import './intro.scss';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <Header />
      <div className="introWrapper container">
        <div className={"details " + theme}>
          <h1>Hi There!</h1>
          <h4>I'm Arnaud and I'm a JAMStack engineer!</h4>
          <AnchorLink href="#contact">
            <button className="button">Hire me</button>
          </AnchorLink>
        </div>
        <div className="thumbnail">
          <img src={dev} alt="I'm Arnaud and I'm a JAMStack engineer!" />
        </div>
      </div>
    </div>
  );
};
