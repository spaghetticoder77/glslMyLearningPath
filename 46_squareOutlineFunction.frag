#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec3 squareOutline(float t, float b, float l, float r, float width){

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-top
    vec2 bottom = (step(b,vec2(st.y)) - step(b+width, vec2(st.y))) * step(l,vec2(st.x))*step(r,1.0-vec2(st.x));
    vec2 top = (step(1.0-t-width,vec2(st.y)) - step(1.0-t, vec2(st.y)))* step(l,vec2(st.x))*step(r,1.0-vec2(st.x));

    // left-right
    vec2 left = (step(l,vec2(st.x)) - step(l+width, vec2(st.x))) * step(b,vec2(st.y))*step(t,1.0-vec2(st.y));
    vec2 right = (step(1.0-r-width,vec2(st.x)) - step(1.0-r, vec2(st.x))) * step(b,vec2(st.y))*step(t,1.0-vec2(st.y));

    return vec3(top.x * top.y + bottom.x * bottom.y + left.x*left.y + right.x*right.y);
}

void main(){

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    color = squareOutline(0.1, 0.1, 0.1, 0.1, 0.01);
    color += squareOutline(0.2, 0.2, 0.2, 0.2, 0.01);
    color += squareOutline(0.3, 0.3, 0.3, 0.3, 0.01);
    color += squareOutline(0.4, 0.4, 0.4, 0.4, 0.01);

    gl_FragColor = vec4(color,1.0);
}