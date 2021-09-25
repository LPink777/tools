const indexBy = (arr, fn) =>
    arr.reduce((obj, v, i) => {
        obj[fn(v, i, arr)] = v;
        return obj;
    }, {});

export default indexBy;
