#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 smoothSphere(vec2 st, float s1, float s2, float r){
    float pct = 1.0 - smoothstep(s1, s2, distance(st,vec2(0.5))/r);
    return vec3(pct);
}

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = smoothSphere(st, 0.35, 0.95, 0.5);

    gl_FragColor = vec4( color, 1.0 );
}