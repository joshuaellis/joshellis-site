/**
 *
 * VersionWindow
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
    width:420px;
    height:600px;
    border:solid 2px #4a94ff;
    background-color:#0f0f0f;
    position:relative;
    transform:translate(-50%,-50%);
    top: 50%;
    left: 50%;
`;
const TitleBar = styled.div`
    width:100%;
    height:48px;
    border-bottom:solid 2px #4a94ff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 0px 0px 16px;
`;

const CloseBox = styled.button`
    width:48px;
    height:48px;
    padding:0;
    border-left:solid 2px #4a94ff;
    &:hover{
        cursor:pointer;
    }
    &:focus{
        outline:none;
    }
`;

const CopyBox = styled.div`
    margin: 24px 40px 40px 40px;
`;

const P = styled.h6`
    display:inline;
    font-size:1.6rem;
`;

/* eslint-disable react/prefer-stateless-function */
class VersionWindow extends React.Component {
  constructor(props){
    super(props);
    // this.messageKeys = Object.keys(this.props.message);  
  }
  onClick = () => {
      const action = {
          type: 'CLOSE_VERSION_WINDOW',
          id:0,
          windowShowing:false,
      }
      // this.props.dispatch(action)
  }
  render(){
    return(
      <div style={{width:'100vw',height:'100vh',zIndex:'1000',backgroundColor:'rgba(15,15,15,0.8)',position:'absolute',left:'0',top:'0'}}>
        <MainWrapper>
            <TitleBar>
                <h6>{this.props.title}</h6>
                <CloseBox onClick={this.onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 46">
                        <g>
                            <polygon style={{fill:'#4a94ff'}} points="28.71 16.71 27.29 15.29 22 20.59 16.71 15.29 15.29 16.71 20.59 22 15.29 27.29 16.71 28.71 22 23.41 27.29 28.71 28.71 27.29 23.41 22 28.71 16.71" />
                            <rect style={{fill:'none'}} width="44" height="46" />
                        </g>
                    </svg>
                </CloseBox>
            </TitleBar>
            <CopyBox>
                
            </CopyBox>
        </MainWrapper>
      </div>
    )
  }
}

VersionWindow.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.object,
};

// {this.messageKeys.map(function(key,index){return(<div style={{marginBottom:'4px'}} key={index}><P>{key}</P><p style={{display:'inline'}}>{this.props.message[key]}</p></div>)},this)}

export default VersionWindow;
