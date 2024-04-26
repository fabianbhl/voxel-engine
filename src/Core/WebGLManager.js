/*
 *  The WebGLManager class is responsible for initializing and configuring
 *  the WebGL context.
 *  It also provides methods for resizing the canvas and clearing the screen.
 */

import Logger from "../Utils/Logger.js";

export default class WebGLManager {
	// The constructor initializes the WebGL context and the canvas element.
	constructor(canvasId) {
		Logger.info("WebGLManager: Initializing WebGL.");
		this.canvas = document.getElementById(canvasId);
		this.gl = this.initializeWebGL();
		if (!this.gl) {
			Logger.error(
				"WebGLManager: Unable to initialize WebGL. Your browser may not support it."
			);
			return null;
		} else {
			Logger.info("WebGLManager: WebGL initialized successfully.");
		}
	}

	// The initializeWebGL method creates a WebGL context and configures it.
	initializeWebGL() {
		let gl =
			this.canvas.getContext("webgl") ||
			this.canvas.getContext("experimental-webgl");

		if (!gl) {
			Logger.error("WebGL is not supported by your browser.");
			return null;
		}

		Logger.info("WebGLManager: WebGL context created successfully.");
		this.configureWebGL(gl);
		return gl;
	}

	// The configureWebGL method clears the canvas.
	configureWebGL(gl) {
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clearColor(0.5, 0.5, 0.5, 1.0);
		gl.clearDepth(1.0);

		Logger.info("WebGLManager: WebGL configuration completed successfully.");
	}

	// The resize method resizes the canvas to match its CSS size.
	resize() {
		if (
			this.canvas.width !== this.canvas.clientWidth ||
			this.canvas.height !== this.canvas.clientHeight
		) {
			this.canvas.width = this.canvas.clientWidth;
			this.canvas.height = this.canvas.clientHeight;
			this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

			Logger.info("WebGLManager: WebGL canvas resized successfully.");
			Logger.info(
				"WebGLManager: New canvas size: " +
					this.canvas.width +
					"x" +
					this.canvas.height +
					" pixels."
			);
		}
	}

	// The clear method clears the canvas.
	clear() {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		Logger.info("WebGLManager: WebGL canvas cleared successfully.");
	}

	// The getGL method returns the WebGL element.
	getGL() {
		return this.gl;
	}
}
