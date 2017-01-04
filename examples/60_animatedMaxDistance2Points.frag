#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 maxDistance2Points(vec3 c, vec2 st, vec2 pt1, vec2 pt2, float s1, float s2, float r){
    float pct = 1.0 - smoothstep(s1, s2, max(distance(st,pt1), distance(st, pt2))/r);
    return vec3(pct*c);
}

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 red = vec3(abs(sin(u_time)+1.5),abs(cos(u_time)+1.0), max(sin(u_time), cos(u_time)));

    vec2 pt1 = vec2(0.5,0.5);
    vec2 pt2 = vec2(cos(u_time/50.0*st.x),0.5+sin(u_time));

    vec3 color = maxDistance2Points(red, st, pt1, pt2, 0.15, 0.75, 0.75);

    gl_FragColor = vec4(color, 1.0);
}