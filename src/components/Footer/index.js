import React from 'react';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Eğitimlerimiz</FooterLinkTitle>
              <FooterLink to='/signin'>Birebir Eğitim</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>İletişim</FooterLinkTitle>
              <FooterLink to='/signin'>Randevu Al</FooterLink>
              <FooterLink to='/signin'>İletişime Geç</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sözleşmeler</FooterLinkTitle>
              <FooterLink to='/signin'>Gizlilik Politikası</FooterLink>
              <FooterLink to='/signin'>Mesafeli Satış Sözleşmesi</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
