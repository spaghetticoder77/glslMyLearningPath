#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float size = cos(u_time)*0.2 + 0.3;

    // bottom-left
    vec2 bl = step(vec2(size),st);

    // top-right
    vec2 tr = step(vec2(size),1.0-st);

    color = vec3(bl.x * bl.y * tr.x * tr.y);

    gl_FragColor = vec4(color,1.0);
}