// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

const link = (file, data) => {
  const regex = /\[([^\[]+)\](\(http.*?\))/gm;
  const arr = [];
  const matches = data.match(regex);
  // console.log(matches);
  const singleRegex = /\[([^\[]+)\]\((.*)\)/;

  for (const i of matches) {
    let info = singleRegex.exec(i);
    arr.push({
      file: file,
      href: info[2],
      text: info[1].replace(/(\n)|`/g, ''),
    });
  }
  console.log(arr);
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
