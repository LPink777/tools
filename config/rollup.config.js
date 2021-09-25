import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
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
            babel({
                exclude: /node_modules/,
                babelHelpers: "bundled",
            }),
            commonjs(),
            resolve(),
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
