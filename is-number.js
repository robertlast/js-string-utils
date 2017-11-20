"use strict";
/**
 * Is the given value a number?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isNumberValue(val) {
	var num = Number(val);
	return (!isNaN(num) && isFinite(num));
};