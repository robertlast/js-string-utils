"use strict";
/**
 * Is the given value null?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isNullValue(val) {
	return (val === null || val === 'null');
};