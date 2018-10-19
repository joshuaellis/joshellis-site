import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Swipe from 'react-easy-swipe';
import ReactDOM from 'react-dom';

const TextWrapper = styled.div`
    background-color: rgba(271,59,255,0.35);
    text-align: left;
    padding:12px 32px 24px 16px;
    width:100%;
    height:100%;
    position:relative;
    z-index:10;
    margin-bottom:auto;
    overflow-y:scroll;
    @media (max-width:320px){
        padding:8px 32px 24px 16px;
    }
`;
const ColourLayer = styled.div`
    background-color: rgba(249,56,35,0.35);
    width:100%;
    height:100%;
    position:relative;
    bottom:calc(100% + 16px);
    right:16px;
    z-index:1;
`;
const Wrapper = styled.div`
    width:100%;
    height:calc(38vh - 0px);
    margin:16px;
    
`;
const HeadingWrapper = styled.div`
    min-width:258px;
    display:flex;
    margin:0px auto 32px auto;
    position:relative;
    left:8px;
    justify-content:space-between;
    @media (max-width:320px){
        margin-bottom:8px;
    }
`;

const Label = styled.span`
    font-family:'FRAC-Bold';
    font-weight:600;
    letter-spacing:-0.01em;
    font-size: 12px;
`;

const Span = styled.span`
    font-family:'FRAC-Regular';
    font-weight:400;
    letter-spacing:-0.01em;
`;

const SVG = styled.svg`
  width:24px;
  height:24px;
`;

const A = styled(Link)`
    &:focus{
        outline:none;
    }
`;

export default class MobileInfoPanel extends React.Component{
    constructor(props){
        super(props)
        this.location = props.location.pathname.replace(/\//ig,'');
        this.swipeDirection = null;
        props.updateProjectAction ? (props.dispatch(props.updateProjectAction('Black Mirror'))) : null;
    }
    handleForwardClick = () => {
        let val = this.props.projectList.indexOf(this.props.project) + 1;
        if(this.props.projectList[val]){
            this.props.dispatch(this.props.updateProjectAction(this.props.projectList[val]))
        }
        else{
            this.props.dispatch(this.props.updateProjectAction(this.props.projectList[0]))
        }
    }
    handleBackwardClick = () => {
        let val = this.props.projectList.indexOf(this.props.project) - 1;
        if(this.props.projectList[val]){
            this.props.dispatch(this.props.updateProjectAction(this.props.projectList[val]))
        }
        else{
            this.props.dispatch(this.props.updateProjectAction(this.props.projectList[this.props.projectList.length - 1]))
        }
    }
    handleSwipe = () => {

    }
    buildButtons = () => {
        if(this.location == 'about'){
            return (
                <HeadingWrapper>
                    <SVG className='disabledButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons">
                            <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                            <rect style={{fill:'none'}} width="24" height="24" />
                        </g>
                    </SVG>
                    <h2 style={{position:'relative', bottom:'4px'}}><Label>//00 </Label>About</h2>
                    <A to="/work"><SVG style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                    </SVG></A>
                </HeadingWrapper>
            )
        }
        else if(this.location == 'work'){
            let val = this.props.projectList.indexOf(this.props.project)
            if(val == 0){
                return(
                    <HeadingWrapper>
                        <A to="/about"><SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons">
                                <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                                <rect style={{fill:'none'}} width="24" height="24" />
                            </g>
                        </SVG></A>
                        <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                        <SVG onClick={this.handleForwardClick} style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                        </SVG>
                    </HeadingWrapper>
                )
            }
            else if(val == (this.props.projectList.length - 1)){
                return(<HeadingWrapper>
                        <SVG onClick={this.handleBackwardClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons">
                                <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                                <rect style={{fill:'none'}} width="24" height="24" />
                            </g>
                        </SVG>
                        <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                        <SVG className="disabledButton" style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                        </SVG>
                </HeadingWrapper>)
            }
            else{
                return(<HeadingWrapper>
                        <SVG onClick={this.handleBackwardClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons">
                                <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                                <rect style={{fill:'none'}} width="24" height="24" />
                            </g>
                        </SVG>
                        <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                        <SVG onClick={this.handleForwardClick} style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                        </SVG>
                </HeadingWrapper>)
            }
        }
        else {
            return null
        }
    }
    buildCopy = () => {
        let text = this.props.message
        if(this.location == 'about'){
            return(
                <TextWrapper>
                    <p><Span>{text[0]}</Span>{text[1]}</p>
                    <p style={{marginBottom:'8px'}}><Span>{text[2]}</Span>{text[3]}</p>
                    <p><Span>{text[4]}</Span>{text[5]}</p>
                </TextWrapper>
            )
        }
        else if(this.location == 'work'){
            text = this.props.message[this.props.project]
            if(!text){
                return(<TextWrapper><p>Something went wrong...</p></TextWrapper>)
            }
            else{
            return(
                <TextWrapper>
                    <p><Span>Role: </Span>{text[0]}</p>
                    <p><Span>Studio: </Span>{text[1]}</p>
                    <p><Span>Year: </Span>{text[2]}</p>
                    {text[4] ? (<p><Span>See Here: </Span><a target="_blank" style={{textDecoration:"none"}} href={text[4]}>{text[5]}</a></p>) : null }
                    <p style={{marginTop:'16px'}}><Span>Info: </Span>{text[3]}</p>
                </TextWrapper>
            )
            }
        }
        else{
            return(
                null
            )
        }
    }
    
    onSwipeMove = (position, event) => {
        this.swipeDirection = position.y
    }
    
    onSwipeEnd = (event) => {
        if(this.location == 'about'){
            if(this.swipeDirection > 0){
                
            }
        }
        else if (this.location == 'work'){
            let val = this.props.projectList.indexOf(this.props.project)
            if(val == 0){
                if(this.swipeDirection < 0){
                    
                }
                else if(this.swipeDirection > 0){
                    this.handleForwardClick();
                }
            }
            else if(val == (this.props.projectList.length - 1)){
                if(this.swipeDirection < 0){
                    this.handleBackwardClick();
                }
            }
            else{
                if(this.swipeDirection < 0){
                    this.handleBackwardClick();
                }
                else if(this.swipeDirection > 0){
                    this.handleForwardClick();
                }
            }
        }
        else{
            return
        }
    }
    render(){
        if(this.props.message){
            return(
                <div ref='parent' style={{display:'flex',justifyContent:'center', flexDirection:'column'}}>
                <Swipe>
                    {this.buildButtons()}
                    <Wrapper>
                        {this.buildCopy()}
                        <ColourLayer />
                    </Wrapper>
                </Swipe>
                </div>
            )
        }
        else{
            return null
        }
    }
}