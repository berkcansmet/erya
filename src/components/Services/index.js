import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Hizmetlerimiz</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>CANLI BAĞLANTI</ServicesH2>
          <ServicesP>
            Mağazanız ile ilgili tüm detayları gün ve saatini sizin seçeceğiniz birebir canlı
            bağlantılarımız sayesinde anlatıyoruz, gösteriyoruz, öğretiyor ve uyguluyoruz.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>YABANCI DİL DESTEĞİ</ServicesH2>
          <ServicesP>
            Yabancı dil konusunda ihtiyaç duyabileceğiniz her şeyi destek ekibimizle birlikte size
            sunuyoruz.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Randevu Sistemi</ServicesH2>
          <ServicesP>
            birebir canlı bağlantılarımız için sizin seçeceğiniz tarihlerde gerçekleştirmek için
            kolay randevu sistemi
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
export default Services;
