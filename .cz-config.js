"use strict";
module.exports = {
  types: [
    { value: "✨feat", name: "feat:    A new feature" },
    { value: "🐛fix", name: "fix:    A bug fix" },
    { value: "📝docs", name: "docs:    Documentation only changes" },
    { value: "💄style", name: "style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)" },
    { value: "♻️refactor", name: "refactor:    A code change that neither fixes a bug nor adds a feature" },
    { value: "⚡️perf", name: "perf:    A code change that improves performance" },
    { value: "✅test", name: "test:    Adding missing tests or correcting existing tests" },
    // { value: "🔧工具", name: "工具:    开发工具变动(构建、脚手架工具等)" },
    { value: "⏪revert", name: "revert:     Reverts a previous commit" },
  ],
  // scopes: [
  //     { name: "模块1" },
  //     { name: "模块2" },
  //     { name: "模块3" },
  //     { name: "模块4" },
  // ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择一种你的提交类型:",
    // scope: "选择一个scope (可选):",
    // used if allowCustomScopes is true
    // customScope: "Denote the SCOPE of this change:",
    subject: "短说明:\n",
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: "非兼容性说明 (可选):\n",
    footer: "关联关闭的issue，例如：#31, #34(可选):\n",
    confirmCommit: "确定提交说明?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["特性", "修复"],
  // limit subject length
  subjectLimit: 100,
};