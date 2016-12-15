#ifdef GL_ES
precision mediump float;
#endif

// Using vec3 & vec4 types
vec4 yellow(){
  return vec4(vec3(1.0,1.0,0.0),1.0);
}

void main() {
  gl_FragColor = yellow();
}