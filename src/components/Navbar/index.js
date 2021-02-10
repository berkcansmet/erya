import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='home'>erya</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Hakkımızda</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='whyus'>Neden Biz ? </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Hizmetlerimiz</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='package'>Paketlerimiz</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='referance'>Referanslarımız</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='singup'>Kayıt Ol</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Giriş Yap</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
