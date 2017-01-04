#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//Plot a line on Y using a value between 0.0 - 1.0
float plot(vec2 st, float pct, float w){
    return smoothstep(pct-w, pct, st.y) -
          smoothstep(pct, pct+w, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float y = sin(PI*st.x);
    vec3 color = vec3(0);

    //Plot a line
    float pct = plot(st,y, 0.01);
    color = (1.0-pct)*color+pct*vec3(1.0);
    gl_FragColor = vec4(color, 1.0);
}