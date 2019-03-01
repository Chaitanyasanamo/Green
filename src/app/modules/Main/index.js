import React from 'react';
import {
  MainBg,
  MainLogo,
  MainSubHeading,
  MainBgLeft,
  MainBgRight,
  SecondSection,
  SectionHeading,
  ServiceWrapper,
  Service,
  ServiceImage,
  ServiceName,
  ServiceDesc,
  ThirdSection,
  SectionHeadingThird,
  FormContainer,
  FormText,
  FormInput,
  FormWrapper,
  FormButton,
  FormSubText,
  FourthSection,
  Copyright,
  Connect,
  Facebook,
  Instagram,
  Whatsapp,
  ExternalLink,
  SecondSectionCover,
} from './StyledMain';

const Main = () => (
  <React.Fragment>
    <MainBg>
      <MainBgLeft />
      <MainBgRight>
        <MainLogo />
        <MainSubHeading>
          Handcrafted Green Setups since 2016
        </MainSubHeading>
      </MainBgRight>
    </MainBg>
    <SecondSection>
      <SecondSectionCover />
      <SectionHeading>Services Offered</SectionHeading>
      <ServiceWrapper>
        <Service>
          <ServiceName>Landscaping</ServiceName>
          <ServiceImage Image="firstService" />
          <ServiceDesc>
            We provide indoor and outdoor landscaping.
            Our artists come up with custom concepts to
            suit your needs and requirements.
          </ServiceDesc>
        </Service>
        <Service>
          <ServiceName>Greenhouse</ServiceName>
          <ServiceImage Image="secondService" />
          <ServiceDesc>
            Apart from the traditional gardening,
            we also specialize in aquaponic and
            hydroponic gardening setups to suit your needs.
          </ServiceDesc>
        </Service>
        <Service>
          <ServiceName>Gifting</ServiceName>
          <ServiceImage Image="thirdService" />
          <ServiceDesc>
            Terrariums, and potted plants,hand crafted
            by our artists are perfect for corporate and
            personal gifting for any important occasion.
          </ServiceDesc>
        </Service>
      </ServiceWrapper>
    </SecondSection>
    <ThirdSection>
      <SectionHeadingThird>Reach Out</SectionHeadingThird>
      <FormContainer>
        <FormText>
          Leave your contact information below and one of us will reach out to you.
        </FormText>
        <FormSubText>We do not spam our valued customers.</FormSubText>
        <FormWrapper>
          <FormInput placeholder="Enter your email address" autoFocus />
          <FormButton>Submit</FormButton>
        </FormWrapper>
      </FormContainer>
    </ThirdSection>
    <FourthSection>
      <Copyright>© Plantorium 2019</Copyright>
      <Connect>
        <Facebook><ExternalLink href="https://www.facebook.com/greencraftersofficial">facebook</ExternalLink></Facebook>
        <Instagram><ExternalLink href="https://www.instagram.com/green_crafters/">instagram</ExternalLink></Instagram>
        <Whatsapp><ExternalLink href="tel: 9620508938">whatsapp</ExternalLink></Whatsapp>
      </Connect>
    </FourthSection>
  </React.Fragment>
);

export default Main;
