// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const separate = (file, links) => {
  return new Promise(function promiseResolve(resolve) {
    const singleRegex = /\[([^\[]+)\]\((.*)\)/;
    const info = links.match(singleRegex);
    fetch(info[2]).then((res) => {
      const valide = `${res.status} ${res.statusText}`;
      return resolve({
        file: file,
        href: info[2],
        text: info[1].replace(/(\n)|`/g, ''),
        valide: valide,
      });
    });
  });
};

const link = (file, data) => {
  const regex = /\[([^\[]+)\](\(http.*?\))/gm;
  const arr = [];
  const matches = data.match(regex);
  matches.forEach((entry) => arr.push(separate(file, entry)));
  Promise.all(arr)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
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
