import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
    background-color: rgba(74,148,255,0.2);
    text-align: left;
    padding:16px 24px 24px 24px;
    width:100%;
    position:relative;
    z-index:10;
    `;
    const ColourLayer = styled.div`
    background-color: rgba(49,255,123,0.2);
    width:100%;
    height:100%;
    position:relative;
    bottom:calc(100% - 16px);
    left:16px;
    z-index:1;
    `;
    const Wrapper = styled.div`
    width:344px;
    height:136px;
    `;

export default class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Wrapper>
                <TextWrapper>
                    <h1>{this.props.children}</h1>
                    <h4>{this.props.standfirst}</h4>
                </TextWrapper>
                <ColourLayer />
            </Wrapper>
        )
    }
}

Title.propTypes = {
    standfirst: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };