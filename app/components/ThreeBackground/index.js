import React, { Component } from 'react';
import * as THREE from 'three-full';

export default class ThreeScene extends Component{
  constructor(props){
      super(props)
  }
  componentDidMount(){

  }
  componentWillUnmount(){
    
  }
  render(){
      return(
        <div
          style={{ width: '100%', height: '100%', position:'absolute', left:'0',top:'0', zIndex:'-1'}}
          ref={(mount) => { this.mount = mount }}
        />
      )
    }
  }