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

    vec3 red = vec3(1.0,0.0, 0.0);

    vec2 pt1 = vec2(0.35, 0.35);
    vec2 pt2 = vec2(0.65, 0.65);

    vec3 color = maxDistance2Points(red, st, pt1, pt2, 0.15, 0.8, 0.95);

    gl_FragColor = vec4(color, 1.0);
}