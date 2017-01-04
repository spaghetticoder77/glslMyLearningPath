#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 smoothSphere(vec3 c, vec2 st, vec2 pt, float s1, float s2, float r){
    float pct = 1.0 - smoothstep(s1, s2, distance(st,pt)/r);
    return vec3(pct*c);
}

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 red = vec3(1.0,0.0, 0.0);
    vec3 green = vec3(0.0,1.0, 0.0);
    vec3 blue = vec3(0.0,0.0, 1.0);

    vec2 pt1 = vec2(0.25, 0.5);
    vec2 pt2 = vec2(0.5, 0.5);
    vec2 pt3 = vec2(0.75, 0.5);

    vec3 color1 = smoothSphere(red, st, pt1, 0.1 + abs(sin(u_time))*0.5, 0.45 + abs(sin(u_time))*0.85, 0.10);
    vec3 color2 = smoothSphere(green, st, pt2, 0.1 + abs(sin(u_time))*0.5, 0.45 + abs(sin(u_time))*0.85, 0.10);
    vec3 color3 = smoothSphere(blue, st, pt3, 0.1 + abs(sin(u_time))*0.5, 0.45 + abs(sin(u_time))*0.85, 0.10);

    vec3 color = color1 + color2 + color3;

    gl_FragColor = vec4(color, 1.0);
}