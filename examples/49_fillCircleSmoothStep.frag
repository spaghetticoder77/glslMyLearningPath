#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution;

    float pct = 0.0;

    pct = smoothstep(0.75, 0.15, distance(st,vec2(0.5))*1.5);

    vec3 color = vec3(pct);

  gl_FragColor = vec4( color, 1.0 );
}