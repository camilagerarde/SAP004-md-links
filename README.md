# Markdown Links :link:

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

**MD-LINKS** é uma biblioteca _library_ de linha de comando (CLI) em JavaScript que usa [Node.js](https://nodejs.org/), para ler e analisar arquivos no formato `Markdown`, verificar os arquivos que contenham links e mostrar algumas estatísticas.

> [Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação muito popular entre os programadores.  
> É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos com este formato em qualquer repositório (incluindo este `README.md` que você está lendo agora :blush:).

## Instalação :computer:

No terminal, digite o comando abaixo:  
`$ npm install --global camilagerarde/SAP004-md-links`

Se retornar um erro de permissão, tente usar `sudo` antes do comando, dessa forma:  
`$ sudo npm install --global camilagerarde/SAP004-md-links`

## Como utilizar :star:

### JavaScript API

Para utilizar a biblioteca em um projeto JavaScript, faça o `require` no arquivo desejado.

Dessa forma:

```
const mdLinks = require("md-links");

mdLinks("./exemplo.md", { validate: true })
  .then(links => {
    if(validate) {
      // => [{ file, href, text, validate }]
    } else {
      // => [{ file, href, text }]
    }
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interface de Linha de Comando)

Utilize o executável da seguinte maneira, através do terminal:

`$ md-links <path-to-file-or-directory> [options]`

- `path`: Rota absoluta ou relativa para o arquivo, ou diretório.
- `options`: Um objeto com a seguinte propriedade:
  - `validate`: Um booleano que determina se deseja validar os links encontrados.
  - `stats`: Um booleano que determina se deseja verificar estatísticas dos links.

#### Valor de retorno

O retorno será um array de objetos, onde cada objeto representa um link, com as seguintes propriedades:

- `file`: Rota do arquivo onde foi encontrado o link.
- `url`: URL encontrada.
- `text`: Texto descritivo do link.

O comportamento padrão identifica o arquivo Markdown (a partir da rota que recebeu como argumento), analisa e retorna os links encontrados, junto com a rota do arquivo e o texto descritivo.

_Por exemplo:_

```sh
$ md-links ./test

File: ./test/example.md
URL: https://pt.wikipedia.org/wiki/Markdown
Text: Markdown

File: ./test/example.md
URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refere
Text: JavaScript
```

#### Options

##### `--validate`

Se passada a opção `--validate`, o módulo faz uma requisição HTTP para verificar se o link está ativo.

_Por exemplo:_

```sh
$ md-links ./example.md --validate

File: ./example.md
URL: https://pt.wikipedia.org/wiki/Markdown
Text: Markdown
Validate: 200 OK

File: ./example.md
URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refere
Text: JavaScript
Validate: 404 Not Found

```

##### `--stats`

Se passada a opção `--stats` o _output_ (saída) será um texto com estatísticas (total e únicos) sobre os links.

```sh
$ md-links ./test --stats

Total links: 5
Unique links: 4
```

##### `--stats e --validate`

Se combinadas as opções `--stats` e `--validate` o _output_ será um texto com estatísticas sobre os links incluindo links "quebrados".

```sh
$ md-links ./test --validate --stats

Total links: 5
Unique links: 4
Broken links: 1
```

## Desinstalação :warning:

Para desinstalar a biblioteca, utilize o comando:

`$ npm uninstall --global md-links`

ou em casos de erro de permissão:  
`$ sudo npm uninstall --global md-links`

Caso persista o erro utilize o comando, para verificar o nome da pasta onde foi instalada a biblioteca.  
`$ npm list --global --depth=0`

e utilize:  
`$ npm uninstall --global <nome-da-pasta>`

## Considerações gerais

### Tecnologias e bibliotecas utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- [commander](https://github.com/tj/commander.js/)
- [chalk](https://github.com/chalk/chalk)
- [fs](https://nodejs.org/api/fs.html)
- [path](https://nodejs.org/api/path.html)
- [fetch](https://www.npmjs.com/package/node-fetch)
- [eslint](https://eslint.org/)
- [jest](https://jestjs.io/)

## Autoria

Feito por [Camila Cunha](https://github.com/camilagerarde), para o Bootcamp da [Laboratória](https://github.com/Laboratoria).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
