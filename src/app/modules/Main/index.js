import React from 'react';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import firebase from 'firebase';
import firebaseConfig from '../../config';
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
  FormLabel,
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
  ThankYou,
  FormField,
  FormImage,
} from './StyledMain';

firebase.initializeApp(firebaseConfig);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      phoneNumber: '',
      queryDetails: '',
      userEmail: '',
      userAddress: '',
      thankYou: false,
      error: false,
    };
    this.messageRef = firebase.database().ref().child('messages');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  saveData = () => {
    const {
      userName,
      phoneNumber,
      queryDetails,
      userEmail,
      userAddress,
    } = this.state;
    if (userName !== '' && phoneNumber !== '' && userEmail !== '' && userAddress !== '' && queryDetails !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword('chaitanya@plantorium.in', 'Password')
        .then(() => {
          const newItem = {
            userName,
            phoneNumber,
            queryDetails,
            userEmail,
            userAddress,
          };
          this.messageRef.push(newItem);
          this.setState({ thankYou: true });
        })
        .catch(() => {
          this.setState({ error: true });
        });
    } else {
      this.setState({ error: true });
    }
  }

  nameChanged = (userName) => {
    this.setState({ userName });
  }

  addressChanged = (userAddress) => {
    this.setState({ userAddress });
  }

  queryChanged = (queryDetails) => {
    this.setState({ queryDetails });
  }

  numberChanged = (phoneNumber) => {
    this.setState({ phoneNumber });
  }

  emailChanged = (userEmail) => {
    this.setState({ userEmail });
  }

  render() {
    const {
      userName,
      phoneNumber,
      queryDetails,
      userEmail,
      userAddress,
      thankYou,
      error,
    } = this.state;
    return (
      <FirebaseDatabaseProvider>
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
            <FormField>
              {!thankYou && <FormImage />}
              { !thankYou
              && (
              <FormWrapper>
                <FormLabel>Your Name</FormLabel>
                <FormInput placeholder="Name" autoFocus value={userName} onChange={e => this.nameChanged(e.target.value)} hasError={error} />
                <FormLabel>Your Address</FormLabel>
                <FormInput placeholder="Your Locality will do" value={userAddress} onChange={e => this.addressChanged(e.target.value)} hasError={error} />
                <FormLabel>Query Details</FormLabel>
                <FormInput placeholder="e.g. I want a green wall" value={queryDetails} onChange={e => this.queryChanged(e.target.value)} hasError={error} />
                <FormLabel>Contact Number</FormLabel>
                <FormInput placeholder="Just to get in touch" value={phoneNumber} onChange={e => this.numberChanged(e.target.value)} hasError={error} />
                <FormLabel>Email Address</FormLabel>
                <FormInput placeholder="To send quotation" value={userEmail} onChange={e => this.emailChanged(e.target.value)} hasError={error} />
                <FormButton onClick={() => this.saveData()}>Submit</FormButton>
              </FormWrapper>
              )}
              { thankYou && !error
              && (
                <ThankYou>
                  Thank You! One of us will soon get in  touch with you.
                </ThankYou>
              )}
            </FormField>
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
      </FirebaseDatabaseProvider>
    );
  }
}

export default Main;
