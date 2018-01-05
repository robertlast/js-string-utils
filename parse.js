"use strict";
var isEmpty = require('./is-empty');
var isTrue = require('./is-true');
var isFalse = require('./is-false');
var isNull = require('./is-null');
var isNumber = require('./is-number');
var isDate = require('./is-date');

/**
 * Converts a string to a non-string value if possible. 
 * Can be used as a reviver function for JSON.parse.
 * e.g. converts 'true'->true, 'null'->null, '3'->3.
 * @function parse
 * @param {string} str The string to convert.
 * @returns {undefined|boolean|null|number|Date|string}
 */
function parse(str) {
	if (isEmpty(str)) {
		return null;
	} else if (isTrue(str)) {
		return true;
	} else if (isFalse(str)) {
		return false;
	} else if (isNull(str)) {
		return null;
	} else if (isNumber(str)) {
		return Number(str);
	} else if (isDate(str)) {
		return new Date(str);
	} else {
		return str;
	}
};

module.exports = parse;