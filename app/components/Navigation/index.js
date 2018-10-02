import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Link = styled(NavLink)`
    font-family:'Relevant-Thin';
    font-weight: 200;
    font-size:1.6rem;
    margin-left:32px;
    text-decoration:none;
    letter-spacing:0.05rem;
`

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.handleAbout = this.handleAbout.bind(this);
        this.handleWork = this.handleWork.bind(this);
    }
    handleAbout(){
        const action = {
            type:'RESET_WORK'
        };
        this.props.dispatch(action);
    }
    handleWork(){
        const action = {
            type:'OPEN_WINDOW'
        };
        this.props.dispatch(action);
    }
    render(){
        return(
            <div>
                <Link onClick={this.handleAbout} exact to="/about" activeStyle={{fontWeight:600,}}>About</Link>
                <p style={{fontFamily:'Relevant-Thin',fontWeight: 200,display:'inline',marginLeft:'32px',opacity:0.5,letterSpacing:'0.05rem',}}>Experiments</p>
                <Link onClick={this.handleWork} exact to="/work" activeStyle={{fontWeight:600,}}>Work</Link>
            </div>
        );
    }
}