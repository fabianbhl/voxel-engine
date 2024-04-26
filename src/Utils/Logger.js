/*
 * 	Logger class to log messages to console
 *	It uses static methods to easily log messages
 *	without instantiating the class. It can be used
 *	from anywhere in the code and especially from
 *	classes that don't have access to console object.
 */

class Logger {
	static info(message, ...optionalParams) {
		console.info("INFO:", message, ...optionalParams);
	}

	static warn(message, ...optionalParams) {
		console.warn("WARN:", message, ...optionalParams);
	}

	static error(message, ...optionalParams) {
		console.error("ERROR:", message, ...optionalParams);
	}
}

export default Logger;
