import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
    background-color: rgba(49,255,123,0.2);
    text-align: left;
    padding:7px 24px 7px 24px;
    width:100%;
    position:relative;
    z-index:10;
    display:flex;
    justify-content:space-between;
    `;
    const ColourLayer = styled.div`
    background-color: rgba(74,148,255,0.2);
    width:100%;
    height:100%;
    position:relative;
    bottom:calc(100% + 5px);
    right:24px;
    z-index:1;
    `;
    const Wrapper = styled.div`
    width:288px;
    height:28px;
    `;
    const A = styled.a`
        font-family:'FRAC-Medium';
        font-weight: 500;
        font-size:1rem;
        text-decoration:none;
    `

export default class Social extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Wrapper>
                <TextWrapper>
                    <A target="_blank" href="mailto:joshua.ellis18@gmail.com">Email</A>
                    <A target="_blank" href="https://www.instagram.com/planet_josh/?hl=en">Instagram</A>
                    <A target="_blank" href="https://www.linkedin.com/in/joshua-ellis-66b362114/">LinkedIn</A>
                </TextWrapper>
                <ColourLayer />
            </Wrapper>
        )
    }
}