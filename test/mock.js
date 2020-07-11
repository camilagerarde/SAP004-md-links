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
    file: './example.md',
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    validate: '200 OK',
  },
  {
    file: './example.md',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refere',
    text: 'JavaScript',
    validate: '404 Not Found',
  },
  {
    file: './example.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './example.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    validate: '200 OK',
  },
  {
    file: './example.md',
    href: 'https://www.npmjs.com/',
    text: 'npm',
    validate: '200 OK',
  },
];

module.exports = {
  resultDirectory,
  resultFile,
};
