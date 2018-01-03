"use strict";
const ISO8601_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?)?(\.\d{2,5})?(Z|([+-]\d{2}:\d{2}))?$/;
/**
 * Is the given value a date?
 * @todo Uses RegEx, use Moment library instead?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
function isDateValue(val) {
	// Use a RegEx to check if the string is in ISO 8601 format:
	return ISO8601_DATE_FORMAT.test(val);
};

module.exports = isDateValue;