import isPlainObject from "./isPlainObject.js";
import isNil from "./isNil.js";

/**
 * metaDataMap 数据映射兜底
 * @param {obj} source 定义的数据模型
 * @param {obj} target 接口返回的数据模型
 * @param {func} callback 当接口返回值与定义的字段不一致时执行的回调
 * @param {string|number} _index 私有属性，调用时不需要传参，兜底的字段的索引
 * @param {obj} _parent 私有属性，调用时不需要传参，兜底的字段的上一级对象
 * @returns {obj} 经过兜底处理后的数据
 */

/**
 * callback 回调函数
 * @param {string} key 报错的字段
 * @param {obj} target 报错的对象
 * @param {string|number} index 兜底的字段的索引
 * @param {obj} parent 报错字段的上一级对象
 * @returns {obj} 报错执行的回调
 */

// const cb = ({ key, target, index, parent }) => {
//     console.log(`k`, key);
//     console.log(`t`, target);
//     console.log(`index`, index);
//     console.log(`parent`, parent);
//     console.log(`parent[index]`, parent[index]);
// };

const metaDataMap = (source, target, callback, _index, _parent) => {
	if (!isPlainObject(target)) return target;

	return Object.entries(source).reduce((a, c) => {
		const [k, v] = c;

		const val = target[k];

		if (!isNil(val)) {
			if (Array.isArray(val)) {
				a[k] = val.map((x, i) =>
					metaDataMap(
						isPlainObject(source[k][0]) ? source[k][0] : [],
						x,
						callback,
						i,
						val
					)
				);
			} else if (isPlainObject(val)) {
				a[k] = metaDataMap(source[k], val, callback, k, target);
			} else {
				a[k] = val;
			}
		} else {
			a[k] = v;
			typeof callback == "function" &&
				callback({
					key: k,
					target: target,
					index: _index,
					parent: _parent,
				});
		}

		return a;
	}, {});
};

export default metaDataMap;
