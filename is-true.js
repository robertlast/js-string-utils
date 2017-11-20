"use strict";
/**
 * Is the given value true (boolean)?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isTrueValue(val) {
	return (val === 'true' || val === 'True' || val === true);
};