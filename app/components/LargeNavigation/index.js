import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Link = styled(NavLink)`
    font-family:'Relevant', Helvetica, sans-serif;
    font-weight: 400;
    font-size:3.2rem;
    text-decoration:none;
    letter-spacing:0.05rem;
    display:inline-block;
`

const Wrapper = styled.div`
    position:relative;
    bottom:15%;
    text-align:center;
`

export default class LargeNavigation extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.portrait){
            return(
                <Wrapper style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                    <Link style={{fontSize:'2.4rem'}} to="/about">About</Link>
                    <h2 style={{opacity:0.5,marginTop:'40px',marginBottom:'40px'}}>Experiments</h2>
                    <Link style={{fontSize:'2.4rem'}} to="/work">Work</Link>
                </Wrapper>
            );
        }
        else{
            return(
                <Wrapper>
                    <Link to="/about">About</Link>
                    <h2 style={{marginLeft:128,marginRight:128,display:'inline-block',opacity:0.5}}>Experiments</h2>
                    <Link to="/work">Work</Link>
                </Wrapper>
            );
        }
    }
}