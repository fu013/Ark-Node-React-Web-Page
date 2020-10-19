import React, {Component} from 'react';
import styled from 'styled-components';
import { FaTwitter, FaYoutube, FaDiscord, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
import { SiMinutemailer } from 'react-icons/si';

class Footer extends Component{
    render(){
        const Footer = styled.div`
            min-width: 1200px;
            background-color: rgba(96, 94, 94, 1);
            color: white;
            height: 100px;
            margin-top: 50px;
            border-top: 1px solid black;
            position: relative;
            clear: both;
        `
        const IconWrapper = styled.h3`{
            position: absolute;
            margin-right: 10px;
            right: 10px;
            top: 30px;
        }`
        const IconSizeStyle = {
            fontSize: "1.5em",
            marginRight: "20"
        };
        const Last = {
            marginRight: "0"
        };
        const FooterMenu = {
            position: "relative",
            fontSize: "1em",
            top: "40px",
            textAlign: "center",
            listStyleType: "none"
        };
        const FooterMenuLi = {
            marginRight: "100px",
            display: "inline-block",
            fontSize: "1.2em",
            fontWeight: "700"
        };
        const FooterMenuLiLast = {
            marginRight: "0",
            display: "inline-block",
            fontSize: "1.2em",
            fontWeight: "700"
        };
        const IconSizeStyle2 = {
            fontSize: "1em",
            marginRight: "5"
        };

        return(
            <Footer>
                <ul style={FooterMenu}>
                    <li style={FooterMenuLi}><SiGnuprivacyguard style={IconSizeStyle2}/>Privacy Policy</li>
                    <li style={FooterMenuLi}><AiOutlineLoading3Quarters style={IconSizeStyle2}/>2020.10~ing ScarletWEB</li>
                    <li style={FooterMenuLiLast}><SiMinutemailer style={IconSizeStyle2}/>Contact Me</li>
                </ul>
                <IconWrapper>
                    <FaTwitter style={IconSizeStyle}/>
                    <FaYoutube style={IconSizeStyle}/>
                    <FaDiscord style={IconSizeStyle}/>
                    <FaFacebookF style={IconSizeStyle}/>
                    <FaInstagramSquare style={IconSizeStyle} style={Last}/>
                </IconWrapper>
            </Footer>
        )
    }
}

export default Footer;