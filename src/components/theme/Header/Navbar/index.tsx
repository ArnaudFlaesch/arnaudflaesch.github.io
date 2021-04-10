import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks/index.';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        Arnaud Flaesch
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
