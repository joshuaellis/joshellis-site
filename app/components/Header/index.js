import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation'
import DumbNavigation from '../DumbNav'
import MediaQuery from 'react-responsive'

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:32px 56px 32px 56px; 
    @media (min-height:1440px){
        margin-top:192px
    }   
    @media (max-width: 696px){
        padding:24px 32px 56px 16px;
    }
    @media (max-width: 600px){
        padding-bottom:40px;
    }
    
`

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <MediaQuery maxDeviceWidth={696} >
          <Wrapper>
            <Title dispatch={this.props.dispatch} standfirst="Creative Technologist">Josh Ellis</Title>
          </Wrapper>
        </MediaQuery>
        <MediaQuery minDeviceWidth={697}>
          <Wrapper>
            <Title dispatch={this.props.dispatch} standfirst="Creative Technologist">Josh Ellis</Title>
            <Switch>
              <Route path="/about" render={() => <Navigation dispatch={this.props.dispatch} />} />
              <Route path="/work" render={() => <Navigation dispatch={this.props.dispatch} />} />
              {this.props.lost ? (<DumbNavigation dispatch={this.props.dispatch} />) : null}
            </Switch>
          </Wrapper>
        </MediaQuery>
      </div>
    )
  }
}
