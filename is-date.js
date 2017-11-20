"use strict";
const ISO8601_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}Z)?$/;
//var ISO8601re = /(\d{4})-(\d{2})-(\d{2})(T(\d{2})\:(\d{2})\:(\d{2})[+-](\d{2})\:(\d{2}))?/;
/**
 * Is the given value a date?
 * TODO: Uses RegEx, use Moment library instead?
 * @param {string} val - The value to check.
 * @returns {boolean}
 */
module.exports = function isDateValue(val) {
	// Use a RegEx to check if the string is in IS8601 format:
	return ISO8601_DATE_FORMAT.test(val);
};
