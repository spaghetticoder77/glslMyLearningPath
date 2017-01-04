#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;
    float v = smoothstep(0.25,0.3,sqrt((st.y-0.5)*(st.y-0.5) + (st.x-0.5)*(st.x-0.5))) -
              smoothstep(0.4,0.5,sqrt((st.y-0.5)*(st.y-0.5) + (st.x-0.5)*(st.x-0.5)));
    vec3 color = vec3(0.0);

    color = (1.0-v)*color + v*vec3(1.0);
    gl_FragColor = vec4(color, 1.0);
}