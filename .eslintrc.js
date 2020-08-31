module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（ES6)。
    ecmaFeatures: { // 这是个对象，表示你想使用的额外的语言特性:
      jsx: true, // 启用 JSX
    },
  },
  plugins: ['react'],
  extends: ['airbnb', 'airbnb/hooks'],
  rules: { // 0或者off表示规则关闭，出错也被忽略；1或者warn表示如果出错会给出警告(不会导致程序退出)；2或者error表示如果出错会报出错误(会导致程序退出，退出码是1)
  //     "indent": [2, 4], //4字符缩进
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    // 关闭禁止prop-types类型
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    // 关闭default-props检查
    'react/require-default-props': 0,
    // 关闭return
    'consistent-return': 0,
    // 禁止嵌套三元
    'no-nested-ternary': 0,
    // 强制无状态组件写成函数
    'react/prefer-stateless-function': 0,
    // 导出规则
    'import/prefer-default-export': 0,
    // button
    'react/button-has-type': 0,
    // 强制keydown
    'jsx-a11y/click-events-have-key-events': 0,
    // 强制语义标签
    'jsx-a11y/no-static-element-interactions': 0,
    'import/extensions': 0,
  //     "eqeqeq": 2, //使用===
  //     "no-console": 1, //不能有console
  //     "no-alert": 1, //不能有alert
  //     "no-const-assign": 2,//const变量不能更改
  //     'no-dupe-args': 2,//参数不能重复
  //     'no-use-before-define': 2, //定义之前不能使用
  //     'prefer-const': 2, //优先使用const
  //     "max-len": [2, 120], //一行的字符不能超过120
  //     "no-multiple-empty-lines": [2, {"max": 2}],//空行最多不能超过2行
  //     "no-func-assign": 2,//禁止重复的函数声明
  //     "no-extra-parens": 2,//禁止非必要的括号
  //     "no-extra-semi": 2,//禁止多余的冒号
  //     'no-multi-spaces': 2, //禁止多余的空格
  //     "no-unused-vars": 2,//定义之后必须使用
  //     "semi": 2,//行尾必须有分好
  //     "curly": 2, //除了单行if 必须有花括号
  //     "no-redeclare": 2,//禁止重复声明变量
  //     "no-mixed-spaces-and-tabs": 2, //禁止tab空格混用
  //     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
