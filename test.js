import metaDataMap from "./src/Object/metaDataMap";

const a = {
	rs: {
		user: "lff",
		name: "ff",
		age: 19,
		like: {
			foot: [
				{
					name: "",
					color: true,
				},
				{
					name: "dabaicai",
					color: false,
				},
			],
			oth: [1, 2, 355, 99],
		},
	},
};

const b = {
	rs: {
		user: "",
		name: "",
		age: null,
		like: {
			foot: [
				{
					name: "",
					color: null,
				},
			],
			oth: [],
		},
	},
};

const cb = ({ key, target, index, parent }) => {
	console.log(`k`, key);
	console.log(`t`, target);
	console.log(`index`, index);
	console.log(`parent`, parent);
	console.log(`parent[index]`, parent[index]);
};

const rs = metaDataMap(b, a, cb);

console.log(`rs`, rs);
