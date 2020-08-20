## web-app
### vue
### Vant 按需加载
### Vant 自定义主题

### vscode setting.json
```
{
  // react 自动补全html
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "javascript.suggest.enabled": false,
  "workbench.editor.enablePreview": false, //打开文件不覆盖
  "search.followSymlinks": false, //关闭rg.exe进程
  "editor.minimap.enabled": false, //关闭迷你图快速预览
  "files.autoSave": "onWindowChange", // 切换窗口时自动保存。
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.tabSize": 2, //制表符符号eslint
  // "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用单引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  // "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned" //属性强制折行对齐
    }
  },
  // "eslint.validate": [ //开启对.vue文件中错误的检查
  //   "javascript",
  //   "javascriptreact",
  //   {
  //     "language": "html",
  //     "autoFix": true
  //   },
  //   {
  //     "language": "vue",
  //     "autoFix": true
  //   }
  // ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // "[vue]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "workbench.statusBar.visible": false,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "window.zoomLevel": 0,
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  
}
```