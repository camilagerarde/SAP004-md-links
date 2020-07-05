// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

const link = (file, text) => {
  const regExp = /(?:\[([^\]]*)\]\([^)]*\))/g;
  // const regExpText = /(?:\[([^\]]*)\])/g;
  // const regExpLink = /(?:\([^)]*\))/g;
  console.log(file);
  console.log(text.match(regExp));
  // console.log(text.match(regExpText));
  // console.log(text.match(regExpLink));
};

const readFile = (file) => {
  fs.readFile(file, 'utf8', (err, text) => {
    if (err) {
      console.error(err);
    } else {
      // console.log(text);
      link(file, text);
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

const read = (input) => {
  if (path.extname(input) === '.md') {
    readFile(input);
  } else {
    readDir(input);
  }
};

read('./README.md');
