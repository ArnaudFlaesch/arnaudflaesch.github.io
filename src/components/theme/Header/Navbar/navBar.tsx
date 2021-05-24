import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks/index.';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme }: string  = useContext(ThemeContext);

  return (
    <Wrapper className="container">
      <Brand as={Link} to="/" theme={theme}>
        Arnaud Flaesch
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
