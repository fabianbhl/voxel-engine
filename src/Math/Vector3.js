/*
 *  The Vector3 class represents a 3D vector
 *  and provides methods for vector math. It should
 *  be pretty straightforward to use and understand.
 */

import Logger from "../Utils/Logger";

class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	set(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
		this.z += vector.z;
		return this;
	}

	subtract(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		this.z -= vector.z;
		return this;
	}

	multiply(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	divide(scalar) {
		if (scalar !== 0) {
			this.x /= scalar;
			this.y /= scalar;
			this.z /= scalar;
		} else {
			Logger.warn("Vector3.divide: Divide by zero");
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		return this;
	}

	dot(vector) {
		return this.x * vector.x + this.y * vector.y + this.z * vector.z;
	}

	cross(vector) {
		const x = this.y * vector.z - this.z * vector.y;
		const y = this.z * vector.x - this.x * vector.z;
		const z = this.x * vector.y - this.y * vector.x;
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	normalize() {
		return this.divide(this.length() || 1);
	}

	distanceTo(vector) {
		return Math.sqrt(
			(this.x - vector.x) ** 2 +
				(this.y - vector.y) ** 2 +
				(this.z - vector.z) ** 2
		);
	}

	clone() {
		return new Vector3(this.x, this.y, this.z);
	}

	toArray() {
		return [this.x, this.y, this.z];
	}

	fromArray(arr) {
		this.x = arr[0];
		this.y = arr[1];
		this.z = arr[2];
		return this;
	}
}

export default Vector3;
