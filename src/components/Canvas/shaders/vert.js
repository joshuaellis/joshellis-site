export default `
    varying vec2 vUv;

    void main(){
        vUv = uv;

        vec3 p = position;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

        gl_Position = projectionMatrix * mvPosition;
    }
`
