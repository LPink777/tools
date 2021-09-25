const deepGet = (obj, keys) =>
    keys.reduce(
        (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
        obj
    );

export default deepGet;
