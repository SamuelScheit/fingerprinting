import { x64hash128 } from "fingerprintjs/src/utils/hashing";

export function getWebglGeometry(n: WebGLRenderingContext) {
  n.clearColor(0, 0, 1, 1);

  // Create a WebGL program
  var program = n.createProgram();

  // Function to create and attach shaders to the program
  function createShader(type: number, source: string) {
    var shader = n.createShader(35633 - type);
    if (program && shader) {
      n.shaderSource(shader, source);
      n.compileShader(shader);
      n.attachShader(program, shader);
    }
  }

  // Create vertex and fragment shaders and attach them to the program
  createShader(
    0,
    "attribute vec2 position;" +
    "uniform float time;" +
    "void main() {" +
    "   float s = sin(time);" +
    "   float c = cos(time);" +
    "   gl_Position = vec4(position * mat2(c, s, -s, c), 1, 1);" +
    "}",
  );
  createShader(
    1,
    "void main() {" + "   gl_FragColor = vec4(1, 0, 0, 1);" + "}",
  );

  // Link and use the program
  if (!program) return null;

  n.linkProgram(program);
  n.useProgram(program);

  // Enable vertex attribute
  n.enableVertexAttribArray(0);

  // Get uniform location and create a buffer
  var timeUniform = n.getUniformLocation(program, "time");
  var buffer = n.createBuffer();
  var bufferType = 34962; // ArrayBuffer

  // Bind and fill the buffer with vertex data
  n.bindBuffer(bufferType, buffer);
  n.bufferData(bufferType, new Float32Array([0, 1, -1, -1, 1, -1]), 35044); // Float32Array and STATIC_DRAW

  // Set up vertex attribute pointer
  n.vertexAttribPointer(0, 2, 5126, false, 0, 0); // index, size, type, normalized, stride, offset

  // Clear the buffer and set uniform value
  n.clear(16384); // COLOR_BUFFER_BIT
  n.uniform1f(timeUniform, 3.65); // Set time uniform

  // Draw arrays
  n.drawArrays(4, 0, 3); // TRIANGLE_STRIP, start, count

  const data = (n.canvas as HTMLCanvasElement).toDataURL();

  return x64hash128(data);
}
