import React, { Component } from 'react';
import * as THREE from 'three-full';
import particle from './particles';

export default class ThreeScene extends Component{
  constructor(props){
      super(props)
      this.state = {
        particleCount: 100000,
      }
  }
  async componentDidMount(){
    await this.sceneSetup();
    this.duration = 20;
    this.time =  0.0;
    this.timeStep = (1 / 60);
    this.particleSystem = particle(this.state.particleCount, this.duration);
    this.particleSystem.frustumCulled = false;

    this.light = new THREE.PointLight(0xffffff, 2, 1000, 2);
    this.light.position.set(0, 100, 0);

    this.scene.add(this.light)
    this.scene.add(this.particleSystem)
    this.start();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  update = () =>{
    this.particleSystem.material.uniforms['uTime'].value = this.time;
  }
  animate = () => {
    this.update();
    this.renderScene();

    this.time +=this.timeStep;
    this.time %= this.duration;

    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }
  handleResize = () => {
    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.mount.clientWidth, this.mount.clientHeight );
  }
  sceneSetup = () => {
    this.mWidth = this.mount.clientWidth;
    this.mHeight = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      60,
      this.mWidth / this.mHeight,
      0.1,
      8000
    );
    this.camera.position.set(0,50,600);
    this.camera.rotation.set(0,0,-100.2)
    this.renderer = new THREE.WebGLRenderer({ antialias: true }) 
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(this.mWidth, this.mHeight)
    this.mount.appendChild(this.renderer.domElement)
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