
PShader myShader;


void setup(){
  size(640,360, P2D);
  noStroke();

  myShader = loadShader("shader.frag");
}


void draw(){
  myShader.set("u_resolution", float(width), float(height));
  myShader.set("u_mouse",float(mouseX), float(mouseY));
  myShader.set("u_time",millis()/1000.0);
  shader(myShader);
  rect(0,0,width,height);
}
