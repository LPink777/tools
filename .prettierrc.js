module.exports = {
	// 指定代码长度，超出换行
	printWidth: 88,
	// tab 键的宽度
	tabWidth: 4,
	// 不使用tab
	useTabs: true,
	// 结尾加上分号
	semi: true,
	// 使用单引号
	singleQuote: false,
	// 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，'consistent': 保持一致 , preserve: 不限制，想用就用)
	quoteProps: "as-needed",
	// jsx 语法中使用单引号
	jsxSingleQuote: false,
	// 确保对象的最后一个属性后有逗号
	trailingComma: "es5",
	// 大括号有空格 { name: 'rose' }
	bracketSpacing: true,
	// 在多行JSX元素的最后一行追加 >
	jsxBracketSameLine: false,
	// 箭头函数，单个参数添加括号
	arrowParens: "always",
	// 是否严格按照文件顶部的特殊注释格式化代码
	requirePragma: false,
	// 是否在格式化的文件顶部插入Pragma标记，以表明该文件被prettier格式化过了
	insertPragma: false,
	// 按照文件原样折行
	proseWrap: "preserve",
	// html文件的空格敏感度，控制空格是否影响布局
	htmlWhitespaceSensitivity: "ignore",
	// 结尾是 \n \r \n\r auto
	endOfLine: "auto",
};
