"use strict";
/**
 * Is the given value an empty string or undefined?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isEmpty(val) {
	return (val === '' || val === undefined);
};
