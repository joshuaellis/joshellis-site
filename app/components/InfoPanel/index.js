import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
    background-color: rgba(271,59,255,0.2);
    text-align: left;
    padding:16px 24px 24px 24px;
    width:100%;
    height:100%;
    position:relative;
    z-index:10;
    margin-bottom:auto;
`;
const ColourLayer = styled.div`
    background-color: rgba(249,56,35,0.2);
    width:100%;
    height:100%;
    position:relative;
    bottom:calc(100% + 24px);
    right:24px;
    z-index:1;
`;
const Wrapper = styled.div`
    width:304px;
    height:360px;
    margin-top:16px;
`;

const Span = styled.span`
    font-family:'FRAC-Regular';
    font-weight:400;
`;

export default class InfoPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let text = this.props.text[this.props.project]
        return(
            <Wrapper>
                <TextWrapper>
                    <section style={{margin:'auto'}}>
                        <p style={{marginBottom: '16px'}}><Span>Role: </Span> {text[0]}</p>
                        <p><Span>INFO: </Span>{text[1]}</p>
                        {text[2] ? (<p style={{marginTop: '16px'}}><Span>See here: </Span><a target="_blank" style={{textDecoration:"none"}} href={text[2]}>{text[3]}</a></p>):null}
                    </section>
                </TextWrapper>
                <ColourLayer />
            </Wrapper>
        )
    }
}

InfoPanel.propTypes = {
    text:PropTypes.object.isRequired,
    project: PropTypes.string.isRequired,
}