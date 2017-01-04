#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

float redOnTime(){
  return abs(sin(u_time/3.0));
}

float greenOnTime(){
  return abs(cos(u_time*2.5));
}

float blueOnTime(){
  return abs(tan(u_time/5.0));
}


vec4 changeRGBonTime(){
    return vec4(redOnTime(), greenOnTime(), blueOnTime(), 1.0);
}

void main() {
  gl_FragColor = changeRGBonTime();
}