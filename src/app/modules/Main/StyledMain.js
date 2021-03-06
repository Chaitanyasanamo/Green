import styled from 'styled-components';
import Main from '../../images/main.webp';
import MainMobile from '../../images/main_mobile.webp';
import landscape from '../../images/landscape.webp';
import gifting from '../../images/gifting.webp';
import aquaponics from '../../images/aquaponics.webp';
import cross from '../../images/cross.webp';
import logo from '../../images/Logo_Medium.webp';
import hand from '../../images/hand.webp';

export const MainBg = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${Main});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.9);
    -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.9);
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.9);
    @media (max-width: 600px) {
        background-image: url(${MainMobile});
      }
`;

export const MainBgLeft = styled.div`
    display: flex;
    flex: 1;
    width: 50%;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const MainBgRight = styled.div`
    display: flex;
    flex: 1;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
`;

export const MainHeading = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    color: #17350d;
    text-shadow: 1px 1px #a5a5a5;
`;

export const MainLogo = styled.div`
    background-image: url(${logo});
    width: 400px;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 600px) {
        width: 340px;
        margin-top: 260px;
    }
`;

export const MainSubHeading = styled.div`
    text-align: center;
    font-weight: 500;
    padding-left: 100px;
    padding-right: 100px;
    font-size: 20px;
    line-height: 28px;
    color: #17350d;
    text-shadow: 1px 1px #a5a5a5;
    @media (max-width: 600px) {
        padding-right: 0px;
        padding-left: 0px;
        text-align: left;
        margin-top: -143px;
        text-align: center;
        font-size: 12px;
        text-shadow: none;
      }
`;

export const SecondSection = styled.div`
    background-color: #f7f7f7;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-image: url(${cross});
`;

export const SecondSectionCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00000000',GradientType=0 );
`;


export const SectionHeading = styled.div`
    position: relative;
    z-index: 99;
    color: #17350d;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-top: 75px;
    margin-bottom: 90px;
    text-align: center;
    width: 100%;
    @media (max-width: 600px) {
        margin-top: 25px;
        margin-bottom: 40px;
        font-size: 50px;
        line-height: 60px;
    }
`;

export const ServiceWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
`;

export const Service = styled.div`
    height: 500px;
    width: 400px;
    margin-bottom: 100px;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    @media (max-width: 600px) {
        height: auto;
    }
`;

export const ServiceName = styled.div`
    font-weight: 500;
    color: #17350d;
    font-size: 30px;
    text-align: left;
    padding-top: 20px;
    margin-left: 20px;
    @media (max-width: 600px) {
        margin-left: 20px;
    }
`;

export const ServiceImage = styled.div`
    background-image: ${props => (props.Image === 'firstService' ? `url(${landscape})` : null)};
    background-image: ${props => (props.Image === 'secondService' ? `url(${aquaponics})` : null)};
    background-image: ${props => (props.Image === 'thirdService' ? `url(${gifting})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    width: 400px;
    height: 280px;
    margin-top: 25px;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ServiceDesc = styled.div`
    padding: 20px;
    font-size: 18px;
    color: #666666;
    line-height: 24px;
    box-sizing: border-box;
    @media (max-width: 600px) {
        padding-left: 20px;
    }
`;

export const ThirdSection = styled.div`
    background-color: #e3d9d7;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-top: 2px solid #e3d9d7;
    padding-bottom: 50px;
`;

export const SectionHeadingThird = styled.div`
    color: #17350d;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-top: 75px;
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
`;

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const FormText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    color: #17350d;
`;

export const FormSubText = styled.div`
    width: 100%;
    font-weight: 300;
    color: #17350d;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const FormLabel = styled.div`
    margin-top: 20px;
`;

export const FormInput = styled.input`
    width: calc(100% - 40px);
    border: none;
    border-bottom: ${props => (props.value === '' && props.hasError ? '1px solid red' : '1px solid #666666')};
    padding: 10px;
    font-size: 18px;
    padding-left: 0;
    margin-bottom: 10px;
    background-color: transparent;
`;

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
    flex: 2;
    background-color: #e3d9d7;
    @media (min-width: 600px) {
        width: 50%;
      }
`;

export const FormButton = styled.div`
    border: 1px solid #17350d;
    height: 40px;
    margin-left: 0px;
    padding-left: 20px;
    align-self: flex-end;
    margin-right: 25px;
    padding-right: 20px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: #17350d;
        color: #ffffff;
      }
`;

export const ThankYou = styled.div`
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const FourthSection = styled.div`
    background-color: #17350d;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
    color: #ffffff;
    box-sizing: border-box;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
`;

export const Copyright = styled.div`
    @media (max-width: 600px) {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`;

export const Connect = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Facebook = styled.div`
    cursor: pointer;
    margin-right: 50px;
`;

export const Instagram = styled.div`
    cursor: pointer;
    margin-right: 50px;`;

export const Whatsapp = styled.div`
    cursor: pointer;
`;

export const ExternalLink = styled.a`
    color: #ffffff;
`;

export const FormField = styled.div`
    display: flex;
`;

export const FormImage = styled.div`
    display: flex;
    flex: 1;
    width: 30%;
    background-image: url(${hand});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #e3d9d7;
    min-height: 600px;
    @media (max-width: 600px) {
        display: none;
      }
`;
