#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;
    float v = step(0.5,st.y);
    vec3 color = vec3(0.0);

    color = (1.0-v)*color + v*vec3(1.0);
    gl_FragColor = vec4(color, 1.0);
}