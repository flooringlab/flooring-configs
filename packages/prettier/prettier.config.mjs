const prettierConfig = {
  $schema: 'http://json.schemastore.org/prettierrc',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  useTabs: false,
  printWidth: 100,
  proseWrap: 'preserve',
};

export default prettierConfig;
