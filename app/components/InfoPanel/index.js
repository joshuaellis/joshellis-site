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
    width:672px;
    height:312px;
    margin-top:-64px;
`;

const Section = styled.section`
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
                {this.props.showProject ? 
                (<div style={{display:'flex', justifyContent:'flex-start'}}>
                    <Section style={{minWidth:'272px', marginRight:'48px'}}>
                        <p style={{marginBottom: '16px'}}><Span>Role: </Span> {text[0]}</p>
                        <p style={{marginBottom: '16px'}}><Span>Studio: </Span> {text[1]}</p>
                        <p style={{marginBottom: '16px'}}><Span>Year: </Span> {text[2]}</p>
                        {text[4] ? (<p style={{marginTop: '16px'}}><Span>See here: </Span><a target="_blank" style={{textDecoration:"none"}} href={text[4]}>{text[5]}</a></p>):null}
                    </Section>
                    <Section style={{maxWidth:'312px'}}>
                        <p><Span>INFO: </Span>{text[3]}</p>
                    </Section>
                </div>):(<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><p style={{alignSelf:'center',marginTop:'15%'}}><Span>Select a project to view</Span></p></div>)
                }
                </TextWrapper>
                <ColourLayer />
            </Wrapper>
        )
    }
}

InfoPanel.propTypes = {
    text:PropTypes.object,
    project: PropTypes.string,
    showProject: PropTypes.bool.isRequired
}