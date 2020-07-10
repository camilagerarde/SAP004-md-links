const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

module.exports = (paths) => {
  const separate = (file, links) => {
    return new Promise(function promiseResolve(resolve) {
      const singleRegex = /\[([^\[]+)\]\((.*)\)/;
      const info = links.match(singleRegex);
      fetch(info[2]).then((res) => {
        const validate = `${res.status} ${res.statusText}`;
        return resolve({
          file: file,
          href: info[2],
          text: info[1].replace(/(\n)|`/g, ""),
          validate: validate,
        });
      });
    });
  };

  const regex = (file, data) => {
    return new Promise(function promiseResolve(resolve, reject) {
      const regex = /\[([^\[]+)\](\(http.*?\))/gm;
      const arr = [];
      const matches = data.match(regex);
      matches.forEach((index) => arr.push(separate(file, index)));
      Promise.all(arr)
        .then((results) => {
          return resolve(results);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  const readFile = (file) => {
    return new Promise(function promiseResolve(resolve) {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          err = "Arquivo inválido!";
          console.error(err);
        } else {
          return resolve(regex(file, data));
        }
      });
    });
  };

  const readDir = (dir) => {
    return new Promise(function promiseResolve(resolve, reject) {
      fs.readdir(dir, (err, files) => {
        if (err) {
          err = "Diretório inválido!";
          console.error(err);
        } else {
          files.forEach((file) => {
            if (path.extname(file) === ".md") {
              return resolve(readFile(`${dir}/${file}`));
            } else {
              return reject("Nenhum arquivo com extensão .md encontrado!");
            }
          });
        }
      });
    });
  };

  if (path.extname(paths) === ".md") {
    return readFile(paths);
  } else {
    return readDir(paths);
  }
};
