"use strict";
/**
 * Returns the given string with first letter capitalized and the rest lowercase.
 * @function capitalize
 * @param {string} str The string to be capitalize.
 * @returns {string} Capitalized string.
 */
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

module.exports = capitalize;