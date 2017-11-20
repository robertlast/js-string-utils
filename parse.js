"use strict";
var isEmptyValue = require('./is-empty');
var isTrueValue = require('./is-true');
var isFalseValue = require('./is-false');
var isNullValue = require('./is-null');
var isNumberValue = require('./is-number');
var isDateValue = require('./is-date');

/**
 * Converts a string to a non-string value if possible. 
 * Can be used as a reviver function for JSON.parse.
 * e.g. converts 'true'->true, 'null'->null, '3'->3.
 * @param {string} str - The string to convert.
 * @returns {undefined|boolean|null|number|Date|string}
 */
module.exports = function convertStringToValue(str) {
	if (isEmptyValue(str)) {
		return null;
	} else if (isTrueValue(str)) {
		return true;
	} else if (isFalseValue(str)) {
		return false;
	} else if (isNullValue(str)) {
		return null;
	} else if (isNumberValue(str)) {
		return Number(str);
	} else if (isDateValue(str)) {
		return new Date(str);
	} else {
		return str;
	}
};
