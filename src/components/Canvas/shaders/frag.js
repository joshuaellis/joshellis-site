export default `
    uniform vec2 resolution;
    uniform float timestamp;
    uniform float lowerLimit;
    uniform float upperLimit;
    uniform float alpha;

    void main() {
        float angle = abs(sin(timestamp));

        vec2 st = gl_FragCoord.xy/resolution.xy;
        st.x *= resolution.x/resolution.y;

        vec3 color = vec3(0.0);
        color = vec3(st.x,st.y,clamp(angle, lowerLimit, upperLimit));

        gl_FragColor = vec4(color,alpha);
    }
`
