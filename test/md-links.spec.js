const mdLinks = require('../index');
const mock = require('./mock.js');

describe('mdLinks', () => {
  test('Expect to be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('Function return (directory)', (done) => {
    mdLinks('./test').then((res) => {
      expect(res).toStrictEqual(mock.resultDirectory);
      done();
    });
  });

  test('Function return (file)', (done) => {
    mdLinks('./README.md').then((res) => {
      expect(res).toStrictEqual(mock.resultFile);
      done();
    });
  });

  test('Return error (no parameter)', (done) => {
    mdLinks('').catch((err) => {
      expect(err).toMatch('ERROR: Invalid directory.');
      done();
    });
  });

  test('Return error (Invalid directory)', (done) => {
    mdLinks('./invalid').catch((err) => {
      expect(err).toMatch('ERROR: Invalid directory.');
      done();
    });
  });

  test('Return error (Invalid file)', (done) => {
    mdLinks('./invalid.md').catch((err) => {
      expect(err).toMatch('ERROR: Invalid file.');
      done();
    });
  });
});
