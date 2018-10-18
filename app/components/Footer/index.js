import React from 'react';
import styled from 'styled-components';
import Social from '../Social'

const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:32px 56px 32px 56px;
    position: fixed;
    bottom:0;
    left:0;
    height:124px;
    clear: both;
    align-items: flex-start;
`;

export default class Footer extends React.Component{
    render(){
        return(
            <Wrapper>
                <label style={{marginTop:8,}}>version 2.0</label>
                <Social />
            </Wrapper>
        );
    }
}