import React, {Component} from 'react';
import styled from 'styled-components';

class Footer extends Component{
    render(){
        const Footer = styled.div`
            height: 100px;
            margin-top: 50px;
            border-top: 1px solid black;
        `
        const H1 = styled.h1`
            text-align: center;
            line-height: 100px;
        `

        return(
            <Footer>
                <H1>FOOTER</H1>
            </Footer>
        )
    }
}

export default Footer;