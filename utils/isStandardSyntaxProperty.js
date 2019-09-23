/**
 * Check whether a property is standard
 *
 * @param {string} property
 * @return {boolean} If `true`, the property is standard
 */

module.exports = function isStandardSyntaxProperty(property) {
	// Less var (e.g. @var: x)
	if (property[0] === '@') {
		return false;
	}

	return true;
};
