// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const valide = (links) => {
  return fetch(links).then((res) => {
    res.status, res.statusText;
  });
};

const link = (file, data) => {
  return new Promise(function promiseResolve(resolve) {
    const regex = /\[([^\[]+)\](\(http.*?\))/gm;
    const arr = [];
    const matches = data.match(regex);
    const singleRegex = /\[([^\[]+)\]\((.*)\)/;
    matches.forEach((index) => {
      const info = index.match(singleRegex);
      return resolve(
        arr.push({
          file: file,
          href: info[2],
          text: info[1].replace(/(\n)|`/g, ''),
          valide: valide(info[2]),
        })
      );
    });
    console.log(arr);
  });
};

const readFile = (file) => {
  return new Promise(function promiseResolve(resolve) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(data);
        return resolve(link(file, data));
      }
    });
  });
};

const readDir = (dir) => {
  return new Promise(function promiseResolve(resolve) {
    fs.readdir(dir, (err, files) => {
      if (err) console.error(err);
      else {
        files.forEach((file) => {
          if (path.extname(file) === '.md') {
            return resolve(readFile(`${dir}/${file}`));
            // console.log(file);
          }
        });
      }
    });
  });
};

const read = (input) => {
  if (path.extname(input) === '.md') {
    return readFile(input);
  } else {
    return readDir(input);
  }
};

read('./diretório');
