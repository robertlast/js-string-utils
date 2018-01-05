"use strict";
var capitalizeWord = require('./capitalize');
/**
 * Returns the given string in title case (capitalize first letter of each word).
 * @function toTitleCase
 * @todo Use _.capitalize or _.startCase(_.toLower(str)) ?
 * @param {string} str The string to format.
 * @returns {string} Formatted string.
 */
function toTitleCase(str) {
	// Use a RegEx to split words:
	return (str + '').replace(/\w[a-zA-Z0-9_]*/g, function(txt) {
		// Capitalize the word:
		return capitalizeWord(txt)
	});
}

module.exports = toTitleCase;