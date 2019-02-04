import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Social from '../Social'

const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:32px 56px 32px 56px;
    position: fixed;
    bottom:0;
    height:124px;
    clear: both;
    align-items: flex-start;
    margin:auto;
    max-width:1440px;
    @media (min-height:1440px){
        bottom:192px;
    }
    @media (max-width:1059px){
        height:80px;
    }
`

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <MediaQuery maxDeviceWidth={696} >
          <Wrapper style={{ padding: '0', paddingLeft: '40px', paddingRight: '16px', bottom: '48px', height: '0px' }}>
            <Social />
          </Wrapper>
        </MediaQuery>
        <MediaQuery minDeviceWidth={697} >
          <Wrapper>
            <label style={{ marginTop: 8, width: '100%' }}>version 2.1</label>
            <Social />
          </Wrapper>
        </MediaQuery>
      </div>
    )
  }
}
