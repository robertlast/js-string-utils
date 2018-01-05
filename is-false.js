"use strict";
/**
 * Is the given value false (boolean)?
 * @function isFalse
 * @param {string} val The value to check.
 * @returns {boolean}
 */
function isFalse(val) {
	return (val === 'false' || val === 'False' || val === false);
};

module.exports = isFalse;