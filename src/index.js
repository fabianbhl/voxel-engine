/*
 *   This is the entry point of the application.
 *   It creates a WebGL context and starts the engine,
 *   which clears the canvas with a rainbow color every frame.
 *   Since it is easier to run through the hue wheel than the RGB wheel,
 *   we convert HSL to RGB.
 */

import WebGLManager from "./Core/WebGLManager.js";
import Engine from "./Core/Engine.js";

import hslToRgb from "./Utils/hslToRgb.js";
import Logger from "../Utils/Logger.js";

// Initialize WebGLManager to create a WebGL context
const glManager = new WebGLManager("canvas");
// Resize the canvas to fill the window
glManager.resize();

const gl = glManager.gl;
// Initialize the Engine with the WebGL context
const engine = new Engine(gl);

// Show me rainbows!
let hue = 0;
// Set the engine update method to change the clear color every frame
engine.update = function (deltaTime) {
	// Update the clear color to a new hue every frame
	hue = (hue + deltaTime / 50) % 360; // Rotate through the color wheel every 50ms
	const [r, g, b] = hslToRgb(hue / 360, 1, 0.5); // 100% Saturation, 50% Lightness for vivid colors
	this.gl.clearColor(r, g, b, 1);
};

// Start the engine
engine.start();
