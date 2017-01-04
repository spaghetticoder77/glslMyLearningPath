#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 smoothSphere(vec3 c, vec2 st, float s1, float s2, float r){
    float pct = 1.0 - smoothstep(s1, s2, distance(st,vec2(0.5))/r);
    return vec3(pct*c);
}

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 bcol = vec3(abs(sin(u_time)), abs(cos(u_time)), 0.0);
    vec3 color = smoothSphere(bcol, st, 0.45, 0.85, 0.5);

    gl_FragColor = vec4( color, 1.0 );
}