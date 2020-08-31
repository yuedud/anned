### 如何安装
    npm install @lijianqiang01/anned
### 如何引入
    import toast from '@lijianqiang01/anned/dist/lib/toast'
    import "@lijianqiang01/anned/dist/lib/toast/index.css"
###如何配置按需加载和样式引入
    npm install babel-plugin-import
    新建.babelrc.js
    plugins中书写以下代码：
        [
          "import",
          {
            "libraryName": "@lijianqiang01/anned",
            "libraryDirectory": "./dist/lib",
            "style": name => `${name}/index.css`
          }
        ]

文档：暂无
