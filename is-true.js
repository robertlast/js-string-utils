"use strict";
/**
 * Is the given value true (boolean)?
 * @function isTrue
 * @param {string} val The value to check.
 * @returns {boolean}
 */
function isTrue(val) {
	return (val === 'true' || val === 'True' || val === true);
};

module.exports = isTrue;