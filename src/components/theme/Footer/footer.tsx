import React from 'react';
import './footer.scss';
import social from './social.json';

export const Footer = () => (
  <div className="wrapper">
    <div className="flex container">
      <div className="details">
        <h2>John Doe</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </div>
      <div className="links">
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </div>
    </div>
  </div>
);
