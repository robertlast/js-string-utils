"use strict";
/**
 * Is the given value null?
 * @function isNull
 * @param {string} val The value to check.
 * @returns {boolean}
 */
function isNull(val) {
	return (val === null || val === 'null');
};

module.exports = isNull;