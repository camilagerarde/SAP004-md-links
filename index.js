// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

const link = (file, text) => {
  const regex = /\[([^\[]+)\](\(http.*\))/gm;
  const matches = text.match(regex);
  const singleRegex = /\[([^\[]+)\]\((.*)\)/;
  for (const i in matches) {
    let result = matches[i].replace('\n', '');
    let info = singleRegex.exec(result);
    console.log(`${Number(i) + 1} - File: ${file}`);
    console.log(`Link: ${info[2]}`);
    console.log(`Text: ${info[1]}\n`);
  }
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
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          readFile(`${dir}/${file}`);
          // console.log(file);
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

read('./diretório');
