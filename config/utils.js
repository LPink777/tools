const fs = require("fs");
const path = require("path");

export const exists = (_path) => {
    return fs.existsSync(_path) || path.existsSync(_path);
};

export const isFile = (_path) => {
    return exists(_path) && fs.statSync(_path).isFile();
};

export const isDir = (_path) => {
    return exists(_path) && fs.statSync(_path).isDirectory();
};

const src = "src";

const folders = fs.readdirSync(path.resolve(src));

const moduleMap = folders.reduce((prev, name) => {

    if (isDir(path.resolve(src, name))) {
        const files = fs.readdirSync(path.resolve(src, name));

        return files.reduce((a, c) => {

            a.push(`${src}/${name}/${c}`);

            return a;
        }, prev);
    }

    return prev;
}, []);

export { moduleMap };
