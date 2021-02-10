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

import Icon1 from '../../images/package1.jpg';
import Icon2 from '../../images/package2.jpg';
import Icon3 from '../../images/svg-5.svg';

const Services = () => {
  return (
    <ServicesContainer id='package'>
      <ServicesH1>Paketlerimiz</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Amazon Dropshipping Satış Taktiği BAE - SG</ServicesH2>
          <ServicesP>
            Bu eğitim programı sayesinde sizlere öğreteceğimiz satış taktikleri ile Amazon’da
            mağazanızın yönetimi, kontrolü, ürün arama teknikleri, ürün analiz işlemleri ve kârlı
            satış stratejileri ile ilgili bilgi sahibi olacaksınız.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Amazon Dropshipping Satış Taktiği USA-MX-ABD</ServicesH2>
          <ServicesP>
            Bu eğitim programı sayesinde sizlere öğreteceğimiz satış taktikleri ile Amazon’da
            mağazanızın yönetimi, kontrolü, ürün arama teknikleri, ürün analiz işlemleri ve kârlı
            satış stratejileri ile ilgili bilgi sahibi olacaksınız.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
export default Services;
