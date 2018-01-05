"use strict";
/**
 * Is the given value a number?
 * @function isNumber
 * @param {string} val The value to check.
 * @returns {boolean}
 */
function isNumber(val) {
	var num = Number(val);
	return (!isNaN(num) && isFinite(num));
};

module.exports = isNumber;