import pkg from './package.json';

export default [
  {
    input: 'main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      { file: pkg.browser, format: 'umd', name: 'sha1' },
    ]
  }
];
