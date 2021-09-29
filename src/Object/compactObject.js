const compactObject = (val) => {
	const data = Array.isArray(val) ? val.filter(Boolean) : val;
	return Object.keys(data).reduce(
		(acc, key) => {
			const value = data[key];
			if (value)
				acc[key] = typeof value === "object" ? compactObject(value) : value;
			return acc;
		},
		Array.isArray(val) ? [] : {}
	);
};

export default compactObject;
