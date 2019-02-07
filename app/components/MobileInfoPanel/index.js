import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Swipe from 'react-easy-swipe';
import ReactDOM from 'react-dom';

import buildButtons from './helpers/buildButtons';
import buildCopy from './helpers/buildCopy';

const TextWrapper = styled.div`
    background-color: rgba(271,59,255,0.35);
    text-align: left;
    padding:12px 32px 24px 16px;
    width:100%;
    height:100%;
    position:relative;
    z-index:10;
    margin-bottom:auto;
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

const TextDiv = styled.div`
    
`;

class MobileInfoPanel extends React.Component{
    constructor(props){
        super(props)
        this.location = props.location.pathname.replace(/\//ig,'');
        this.swipeDirection = null;
        props.updateProject ? (props.updateProject('Black Mirror')) : null;
        this.copyBox = React.createRef()
    }
    handleForwardClick = () => {
        const { projectList, project, updateProject } = this.props;
        let val = projectList.indexOf(project) + 1;
        if(projectList[val]){
            updateProject(projectList[val])
        }
        else{
            updateProject(projectList[0])
        }
        
    }
    handleBackwardClick = () => {
        const { projectList, project, updateProject } = this.props;
        let val = projectList.indexOf(project) - 1;
        if(projectList[val]){
            updateProject(projectList[val])
        }
        else{
            updateProject(projectList[projectList.length - 1])
        }
    }
    handleSwipe = () => {

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
    componentDidUpdate(){
        this.copyBox.current.scrollTop = 0
    }
    render(){
        if(this.props.message){
            return(
                <div ref='parent' style={{display:'flex',justifyContent:'center', flexDirection:'column'}}>
                <Swipe>
                    {buildButtons()}
                    <Wrapper>
                        {buildCopy()}
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

export default MobileInfoPanel;