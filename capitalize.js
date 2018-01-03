"use strict";
/**
 * Returns the given string with first letter capitalized and the rest lowercase.
 * @function capitalizeWord
 * @param {string} str - The string to capitalize.
 * @returns {string} Capitalized string.
 */
module.exports = function capitalizeWord(str) {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}