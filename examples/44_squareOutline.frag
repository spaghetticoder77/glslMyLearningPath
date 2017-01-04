#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 minSize = vec2(0.1);

    // bottom-top
    vec2 bottom = (step(minSize,vec2(st.y)) - step(minSize*1.1, vec2(st.y))) * step(minSize,vec2(st.x))*step(minSize,1.0-vec2(st.x));
    vec2 top = (step(1.0-minSize*1.1,vec2(st.y)) - step(1.0-minSize, vec2(st.y)))* step(minSize,vec2(st.x))*step(minSize,1.0-vec2(st.x));

    // left-right
    vec2 left = (step(minSize,vec2(st.x)) - step(minSize*1.1, vec2(st.x))) * step(minSize,vec2(st.y))*step(minSize,1.0-vec2(st.y));
    vec2 right = (step(1.0-minSize*1.1,vec2(st.x)) - step(1.0-minSize, vec2(st.x))) * step(minSize,vec2(st.y))*step(minSize,1.0-vec2(st.y));

    color = vec3(top.x * top.y + bottom.x * bottom.y + left.x*left.y + right.x*right.y);

    gl_FragColor = vec4(color,1.0);
}