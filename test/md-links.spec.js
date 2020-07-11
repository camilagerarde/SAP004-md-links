const mdLinks = require('../index');
const mock = require('./mock.js');

describe('mdLinks', () => {
  test('Expect to be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('Retorno da função com parametro de diretório', (done) => {
    mdLinks('./test').then((response) => {
      expect(response).toStrictEqual(mock.resultDirectory);
      done();
    });
  });

  test('Retorno da função com o parametro de arquivo', (done) => {
    mdLinks('./example.md').then((response) => {
      expect(response).toStrictEqual(mock.resultFile);
      done();
    });
  });

  test('Erro sem parametro', (done) => {
    mdLinks('').catch((err) => {
      expect(err).toBe('ERROR: Invalid directory.');
      done();
    });
  });

  test('Erro diretório inválido', (done) => {
    mdLinks('./invalid').catch((err) => {
      expect(err).toBe('ERROR: Invalid directory.');
      done();
    });
  });

  test('Erro arquivo inválido', (done) => {
    mdLinks('./invalid.md').catch((err) => {
      expect(err).toBe('ERROR: Invalid file.');
      done();
    });
  });
});
