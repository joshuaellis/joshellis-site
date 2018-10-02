import React, { Component } from 'react';
import * as THREE from 'three-full';

export default class ThreeScene extends Component{
    constructor(props){
        super(props)
    }
 async componentDidMount(){
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 10
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(0x000000, 0)
    // this.renderer.setClearColor('#ffffff')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD LIGHT
    this.lightOne = new THREE.DirectionalLight(new THREE.Color('rgb(255,255,255)'), 0.4);
    this.lightOne.position.set(-0.1, 1, -4);
    this.lightTwo = new THREE.DirectionalLight(new THREE.Color('rgb(179,0,0)'));
    this.lightTwo.position.set(-5, 5, -150).normalize();
    this.lightThree = new THREE.PointLight( 0xffffff, 0.3, 100 );
    this.lightThree.position.set(0,0,90);

    this.scene.add(this.lightOne);
    this.scene.add(this.lightTwo);
    this.scene.add(this.lightThree);
    //ADD GATEWAY OBJECT
    await this.loadModel(this.scene);

    this.start()
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
animate = () => {
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
loadModel = (scene) => {
  const modelName = 'Platform';
  const objLoader = new THREE.OBJLoader2();
  const mtlLoader = new THREE.MTLLoader();
  const objLoadCallback = ( event ) => {
    const object = event.detail.loaderRootNode
    scene.add( object );
    console.log( 'Loading complete: ' + event.detail.modelName );
    object.rotation.x = 1.4;
    object.position.z = -4;
    object.position.x = -5;
    object.position.y = -10;
  };
  const onLoadMtl = ( materials ) => {
    mtlLoader.setTexturePath('./');
    materials.preload();
    objLoader.setModelName( modelName );
    objLoader.setMaterials( materials );
    objLoader.setLogging( true, true )
    objLoader.load( require('./gateway/space_station.obj'), objLoadCallback, null, null, null, false ) 
  };
  mtlLoader.load( require('./gateway/space_station.mtl'), onLoadMtl );
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