const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

module.exports = (paths) => {
  const separate = (file, data) => {
    return new Promise(function promiseResolve(resolve) {
      const singleRegex = /\[([^\[]+)\]\((.*)\)/;
      const item = data.match(singleRegex);
      fetch(item[2]).then((res) => {
        const validate = `${res.status} ${res.statusText}`;
        return resolve({
          file: file,
          href: item[2],
          text: item[1].replace(/(\n)|`/g, ''),
          validate: validate,
        });
      });
    });
  };

  const mdLinks = (file, data) => {
    return new Promise(function promiseResolve(resolve, reject) {
      const regex = /\[([^\[]+)\](\(http.*?\))/gm;
      const arr = [];
      const matches = data.match(regex);
      matches.forEach((item) => arr.push(separate(file, item)));
      Promise.all(arr)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  const readFile = (file) => {
    return new Promise(function promiseResolve(resolve, reject) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          err = 'ERROR: Invalid file.';
          return reject(err);
        } else {
          return resolve(mdLinks(file, data));
        }
      });
    });
  };

  const readDir = (dir) => {
    return new Promise(function promiseResolve(resolve, reject) {
      fs.readdir(dir, (err, files) => {
        if (err) {
          err = 'ERROR: Invalid directory.';
          return reject(err);
        } else {
          files.forEach((file) => {
            if (path.extname(file) === '.md')
              return resolve(readFile(`${dir}/${file}`));
          });
        }
      });
    });
  };

  if (path.extname(paths) === '.md') {
    return readFile(paths);
  } else {
    return readDir(paths);
  }
};
