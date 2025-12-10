// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/first-attribute-linebreak': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/indent': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/arrow-parens': 'off',
    '@stylistic/member-delimiter-style': ['error', {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false }
    }]
  }
});
