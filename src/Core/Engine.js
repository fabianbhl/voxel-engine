/*
 *  This is where the magic happens. The Engine class
 *  is the core of the application.
 */

import Logger from "../Utils/Logger.js";
import hslToRgb from "../Utils/hslToRgb.js";

export default class Engine {
	constructor(gl) {
		this.gl = gl;

		this.running = false;
		this.lastRenderTime = 0;
	}

	// This method starts the engine loop.
	start() {
		if (!this.running) {
			this.running = true;
			Logger.info("Engine: Engine started.");
			requestAnimationFrame(this.render.bind(this));
		}
	}

	// This method stops the engine loop.
	stop() {
		this.running = false;
		Logger.info("Engine: Engine stopped.");
	}

	render(timestamp) {
		// If the engine is not running, don't render anything.
		if (!this.running) return;

		// Calculate the time since the last frame.
		const deltaTime = timestamp - this.lastRenderTime;
		this.lastRenderTime = timestamp;

		// Update the scene and render it.
		this.update(deltaTime);

		// Clear the canvas for the next frame.
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Request the next frame.
		requestAnimationFrame(this.render.bind(this));
	}

	update(deltaTime) {
		// Update scene, objects, handle user input, etc.
	}

	/*
	 *  This method is triggered when the WebGL context is lost.
	 *  Losing the WebGL context can happen for various reasons,
	 *  such as browser tab being put in the background,
	 *  system running low on resources, or graphics driver issues.
	 */
	handleContextLost(event) {
		event.preventDefault();
		Logger.error("Engine: WebGL context lost.");
		this.stop();
	}

	// This method is triggered when the WebGL context is restored.
	handleContextRestored(event) {
		this.initializeWebGLSettings();
		Logger.info("Engine: WebGL context restored.");
		this.start();
	}

	// Setup a listener for the context lost and restored events.
	setupEventListeners() {
		this.canvas.addEventListener(
			"webglcontextlost",
			this.handleContextLost.bind(this),
			false
		);
		this.canvas.addEventListener(
			"webglcontextrestored",
			this.handleContextRestored.bind(this),
			false
		);
	}
}
