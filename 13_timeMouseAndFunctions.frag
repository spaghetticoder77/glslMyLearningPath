#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st = u_mouse.xy/u_resolution*abs(cos(u_time));
  gl_FragColor = vec4(max(0.5, st.x), max(st.y, 0.35), abs(sin(u_time))/50.0, 1.0);
}