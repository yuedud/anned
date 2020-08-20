module.exports = {
    parser: 'babel-eslint', // parser指定解析器，默认的为espree。babel-eslint是一个Babel parser的包装器，这个包装器使得 Babel parser 可以和 ESLint 协调工作
    parserOptions: {
        sourceType: 'module', // 设置为 "script" (默认) 或 "module"（ES6)。
        ecmaFeatures: { // 这是个对象，表示你想使用的额外的语言特性:
            jsx: true // 启用 JSX
        }
    },
    rules: { // 0或者off表示规则关闭，出错也被忽略；1或者warn表示如果出错会给出警告(不会导致程序退出)；2或者error表示如果出错会报出错误(会导致程序退出，退出码是1)
        "indent": [2,4],
        "eqeqeq": 2,
        "no-const-assign": 2,
        'no-dupe-keys': 2,
        'no-dupe-args': 2,
        'no-multi-spaces': 2,
        "no-mixed-spaces-and-tabs": 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    env: {
        es6: true,
        node: true,
        browser: true
    }
}
