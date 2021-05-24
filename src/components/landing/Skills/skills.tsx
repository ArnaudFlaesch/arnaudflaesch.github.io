import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import dev from 'assets/illustrations/skills.svg';
import './skills.scss';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapperSkills" id="about">
      <div className="skillsWrapper container">
        <div className="thumbnail">
          <img
            src={dev}
            alt="I'm Arnaud and I'm a Backend & Devops engineer!"
          />
        </div>
        <div className={'details ' + theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <AnchorLink href="#contact">
            <button className="button">Hire me</button>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};
