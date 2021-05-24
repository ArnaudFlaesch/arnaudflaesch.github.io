import React from 'react';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper className="container" id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I'm Arnaud and I'm a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
