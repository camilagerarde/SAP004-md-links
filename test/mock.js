const resultDirectory = [
  {
    file: './test/example.md',
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    validate: '200 OK',
  },
  {
    file: './test/example.md',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refere',
    text: 'JavaScript',
    validate: '404 Not Found',
  },
  {
    file: './test/example.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './test/example.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './test/example.md',
    href: 'https://www.npmjs.com/',
    text: 'npm',
    validate: '200 OK',
  },
];

const resultFile = [
  {
    file: './README.md',
    href: 'https://forthebadge.com',
    text:
      'forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    text: 'JavaScript',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://github.com/tj/commander.js/',
    text: 'commander',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://github.com/chalk/chalk',
    text: 'chalk',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://nodejs.org/api/fs.html',
    text: 'fs',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://www.npmjs.com/package/node-fetch',
    text: 'fetch',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://eslint.org/',
    text: 'eslint',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://jestjs.io/',
    text: 'jest',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://github.com/camilagerarde',
    text: 'Camila Cunha',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://github.com/Laboratoria',
    text: 'Laboratória',
    validate: '200 OK',
  },
  {
    file: './README.md',
    href: 'https://forthebadge.com',
    text:
      'forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)',
    validate: '200 OK',
  },
];

module.exports = {
  resultDirectory,
  resultFile,
};
