import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import {Route, Switch} from 'react-router-dom';
import Navigation from '../Navigation';


const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:32px 56px 32px 56px;
`;

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Wrapper>
                <Title standfirst="Creative Technologist">Josh Ellis</Title>
                <Switch>
                    <Route  path="/about" render={()=><Navigation dispatch={this.props.dispatch} />} />
                    <Route  path="/work" render={()=><Navigation dispatch={this.props.dispatch} />} />
                </Switch>
            </Wrapper>
        );
    }
}