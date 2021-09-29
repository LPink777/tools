module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	plugins: ["prettier"],
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	rules: {
		"prettier/prettier": "error",
	},
	globals: {},
};
