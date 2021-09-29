import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import del from "rollup-plugin-delete";
import livereload from "rollup-plugin-livereload";

export default {
	input: "test.js",

	output: {
		file: "dist/index.js",
		format: "es",
		sourcemap: true,
	},

	plugins: [
		del({
			targets: "dist/*",
		}),
		resolve(),
		commonjs(),
		babel({
			exclude: /node_modules/,
			babelHelpers: "bundled",
		}),
		serve({
			open: true,
			port: 8088,
			historyApiFallback: true,
		}),
		livereload({}),
	],
};
