/**
 * webgl hash
 * s76: {
	s: 0,
	v: "9e4b34771c3006cb419537b406158135",
},
 *
 */

function uu(n) {
	var t = n.cache;
	return r(this, void 0, void 0, function () {
		var n;
		return i(this, function (e) {
			switch (e.label) {
				case 0:
					return (n = nt(t))
						? ((function (n) {
								n.clearColor(0, 0, 1, 1);
								var t = n.createProgram();
								if (!t) return;
								function e(e, r) {
									var i = n.createShader(35633 - e);
									t && i && (n.shaderSource(i, r), n.compileShader(i), n.attachShader(t, i));
								}
								e(
									0,
									"attribute vec2 p;uniform float t;void main(){float s=sin(t);float c=cos(t);gl_Position=vec4(p*mat2(c,s,-s,c),1,1);}"
								),
									e(1, "void main(){gl_FragColor=vec4(1,0,0,1);}"),
									n.linkProgram(t),
									n.useProgram(t),
									n.enableVertexAttribArray(0);
								var r = n.getUniformLocation(t, "t"),
									i = n.createBuffer(),
									o = 34962;
								n.bindBuffer(o, i),
									n.bufferData(o, new Float32Array([0, 1, -1, -1, 1, -1]), 35044),
									n.vertexAttribPointer(0, 2, 5126, !1, 0, 0),
									n.clear(16384),
									n.uniform1f(r, 3.65),
									n.drawArrays(4, 0, 3);
						  })(n),
						  [4, p()])
						: [2, { s: -1, v: null }];
				case 1:
					return e.sent(), [2, { s: 0, v: Gt(n.canvas.toDataURL()) }];
			}
		});
	});
}
