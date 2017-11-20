"use strict";
var capitalizeWord = require('lodash/capitalize');
/**
 * Returns the given string in title case (capitalize first letter of each word).
 * TODO: Use _.capitalize instead?
 * @param {string} str - The string to format.
 * @returns {string} - Formatted string.
 */
module.exports = function toTitleCase(str) {
	// Use a RegEx to split words:
	return (str + '').replace(/\w[a-zA-Z0-9_]*/g, function(txt) {
		// Capitalize the word:
		return capitalizeWord(txt)
	});
}
