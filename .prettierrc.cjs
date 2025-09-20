module.exports = {
  semi: false, // 默认 true
  printWidth: 110, // 行宽 默认 80
  singleQuote: true, // 字符串使用单引号 默认为 false
  arrowParens: 'avoid', // 箭头函数只有一个参数时，是否给括号 js：avoid ts : always
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  // 排序规则
  importOrder: [
    // 外部依赖 从 node_modules 加载的依赖
    // NOTE vue 依赖必须放在第一位 否则 main.ts 中 报错
    '^ol',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^#c/(.*)$',
    '^../(.*)',
    '^./((?!scss).)*$',
    '^./(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
