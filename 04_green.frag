#ifdef GL_ES
precision mediump float;
#endif

vec4 green(){
  return vec4(0.0,1.0,0.0,1.0);
}

void main() {
  gl_FragColor = green();
}