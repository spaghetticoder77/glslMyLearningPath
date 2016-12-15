#ifdef GL_ES
precision mediump float;
#endif

vec4 blue(){
  return vec4(0.0,0.0,1.0,1.0);
}

void main() {
  gl_FragColor = blue();
}