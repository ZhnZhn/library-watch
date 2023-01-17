
const _hasOwnProperty = Object.prototype.hasOwnProperty;

const omit = (
	obj,
	keys
) => {
	const target = {};
	for (let propName in obj) {
		if (keys.indexOf(propName) >= 0
	     || !_hasOwnProperty.call(obj, propName)) {
			continue;
		}
		target[propName] = obj[propName];
	}
	return target;
};

export default omit
