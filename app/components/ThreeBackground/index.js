import * as THREE from 'three-full';
import React from 'react';

export default class ThreeBackground extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
        this.camera.position.z = 500;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff, 1 );
        let geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
        let material = new THREE.MeshNormalMaterial();
        this.root = new THREE.Mesh( geometry, material );
        this.root.position.x = 1000;
        this.scene.add( this.root );
        let amount = 200, object, parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.x = 100;
            parent.add( object );
            parent = object;
        }
        parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.x = - 100;
            parent.add( object );
            parent = object;
        }
        parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.y = - 100;
            parent.add( object );
            parent = object;
        }
        parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.y = 100;
            parent.add( object );
            parent = object;
        }
        parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.z = - 100;
            parent.add( object );
            parent = object;
        }
        parent = this.root;
        for ( var i = 0; i < amount; i ++ ) {
            object = new THREE.Mesh( geometry, material );
            object.position.z = 100;
            parent.add( object );
            parent = object;
        }
        //
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        //
        window.addEventListener( 'resize', this.onWindowResize, false );

        this.start();
    }
    onWindowResize = () => {
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
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
       this.renderScene();
       this.frameId = window.requestAnimationFrame(this.animate)
     }
    renderScene = () => {
        var time = Date.now() * 0.001;
        var rx = Math.sin( time * 0.7 ) * 0.2;
        var ry = Math.sin( time * 0.3 ) * 0.1;
        var rz = Math.sin( time * 0.2 ) * 0.1;
        this.root.traverse( function ( object ) {
            object.rotation.x = rx;
            object.rotation.y = ry;
            object.rotation.z = rz;
        } );
        this.renderer.render(this.scene, this.camera)
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