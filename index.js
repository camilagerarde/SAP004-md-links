// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

const link = (file, text) => {
  const regExpText = /(?:\[([^\]]*)\])/g;
  const regExpLink = /(?:\([^)]*\))/g;
  console.log(file);
  console.log(text.match(regExpText));
  console.log(text.match(regExpLink));
};

const readFile = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // console.log(data);
      link(file, data);
    }
  });
};

const readDir = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) console.error(err);
    else {
      console.log('Arquivos com extensão .md encontrados:');
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          readFile(`${dir}/${file}`);
          console.log(file);
        }
      });
    }
  });
};

const read = (entrada) => {
  if (path.extname(entrada) === '.md') {
    readFile(entrada);
  } else {
    readDir(entrada);
  }
};

read('./diretório');

// const regExp = /(?:\[([^\]]*)\]\([^)]*\))/g;
