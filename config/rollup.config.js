import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import { moduleMap } from "./utils";

const configs = [];

[...moduleMap, "src/index.js"].forEach((entryFile, index) => {
	configs.push({
		input: entryFile,

		output: {
			format: "umd",
			dir: "dist",
			name: "[name].js",
			exports: "named",
		},

		plugins: [
			commonjs(),
			resolve(),
			babel({
				exclude: /node_modules/,
				babelHelpers: "bundled",
				presets: [
					[
						"@babel/preset-env",
						{
							useBuiltIns: "usage",
							corejs: "3",
							targets: {
								ios: "9",
								android: "4.4",
							},
						},
					],
				],
			}),
			terser({
				compress: {
					pure_funcs: ["console.log"],
				},
			}),
		].concat(
			index === 0
				? [
						del({
							targets: "dist/*",
						}),
				  ]
				: []
		),
	});
});

export default configs;
