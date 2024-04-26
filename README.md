# Voxel Engine

## Overview

This project is a JavaScript and WebGL-based voxel engine built from scratch without the use of higher-level libraries such as Three.js. The primary goal of this engine is to facilitate learning JavaScript and gaining a fundamental understanding of game engine architecture.

## Project Structure

The development of the voxel engine is organized into several core areas, each focusing on different aspects of the engine:

- **Core and Basic Math Libraries**
  These foundational components manage the engine's basic operational mechanics and handle mathematical computations needed for 3D rendering and transformations.

- **Graphics and Shaders**
  This module deals with the rendering pipeline, including the creation and management of WebGL contexts, and the compilation and use of shaders to render graphics on the screen.

- **World Representation**
  Handles the representation of the voxel world. This includes managing the voxel data, world chunks, and the overall organization and optimization of the game's world.

We start with the engine and math libraries to establish a robust foundation for handling basic computations and system controls, then progress to graphics and shaders to set up the rendering pipeline, and finally move on to voxels and world representation to build on this groundwork with increasingly complex functionalities and game-specific elements.

- **Utility Systems**
  Includes systems for logging events, managing external resources and helpers, ensuring that the game engine can efficiently handle file loading and event recording.

- **User Interface**
  Manages user interactions and displays, such as heads-up displays (HUDs) and in-game menus, providing interfaces for player input and feedback.

## Key Components

### WebGLManager

**What it is:** The WebGLManager class is responsible for setting up and managing the WebGL context, which is crucial for any rendering operation in the engine.

**What it does:** The WebGLManager simplifies the use of the WebGL API by offering methods to set up the WebGL context, adjust WebGL settings, and manage events like losing and restoring the context.

### Engine

**What it is:** The Engine class acts as the central hub of the game engine, managing the main game loop and coordinating the updates and renders of the game's components.

**What it does:** It initializes all necessary sub-systems, maintains the game loop where it updates game logic and renders frames, and handles pausing or stopping the engine as needed. The engine ensures that the game's internal state is updated consistently and that each frame is rendered correctly based on the game's logic.

### Logger

**What it is:** The Logger class provides a simple logging system for the engine.

**What it does:** It allows for logging various types of information (errors, warnings and info messages) to the console. For debugging purposes, it's beneficial to receive extensive feedback from the engine. By utilizing static Logger methods, we can efficiently generate console.log messages directly from within class methods (which would otherwise not be possible) to track and diagnose issues.

## Current Implementation

The engine currently includes a demonstration of the engine loop which dynamically changes the background color of the canvas, creating a rainbow effect. This serves as an example of how the engine handles rendering updates based on game loop calculations. Thanks to [mjackson](https://gist.github.com/mjackson/5311256) for the `hslToRgb` function.

## Next Steps to Improve and Extend the Project

1. Add Matrix4 class
2. Implement Geometry and Shaders
3. Implement a dedicated Renderer to draw the Geometry
4. Implement Voxel and World systems/structure

## Usage

To get started with the voxel engine, clone the repository, navigate to the project directory, and open the index.html in your web browser. Ensure you are running the project on a local server to avoid potential issues with resource loading due to browser security restrictions. Or just use the Demo Link below:
[Demo](https://voxel.fabianboehle.dev)
