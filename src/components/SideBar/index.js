import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='home' onClick={toggle}>
          Ana Sayfa
        </SidebarLink>
        <SidebarLink to='about' onClick={toggle}>
          Hakkımızda
        </SidebarLink>
        <SidebarLink to='services' onClick={toggle}>
          Hizmetlerimiz
        </SidebarLink>
        <SidebarLink to='package' onClick={toggle}>
          Paketlerimiz
        </SidebarLink>
        <SidebarLink to='referance' onClick={toggle}>
          Referanslarımız
        </SidebarLink>
        <SidebarLink to='singup' onClick={toggle}>
          Kayıt Ol
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/signin'>Giriş Yap</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};
export default SideBar;
