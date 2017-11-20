"use strict";
/**
 * Is the given value false (boolean)?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isFalseValue(val) {
	return (val === 'false' || val === 'False' || val === false);
};