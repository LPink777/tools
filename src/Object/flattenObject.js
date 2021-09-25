const flattenObject = (obj, prefix = "") =>
    Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? `${prefix}.` : "";
        if (
            typeof obj[k] === "object" &&
            obj[k] !== null &&
            Object.keys(obj[k]).length > 0
        )
            Object.assign(acc, flattenObject(obj[k], pre + k));
        else acc[pre + k] = obj[k];
        return acc;
    }, {});

export default flattenObject;
