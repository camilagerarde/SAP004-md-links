#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const package = require('./package.json');
const mdLinks = require('./index');

program.version(package.version);
program
  .option('-v, --validate [validate]')
  .option('-s, --stats [stats]')
  .parse(process.argv);

let path = program.args[0];
let option = program.validate | program.stats;

mdLinks(path, option)
  .then((response) => {
    if (option === 1 && program.validate) {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magenta(
            item.href
          )} \nText: ${item.text} \nStatus: ${chalk.cyan(item.validate)}`
        );
      });
    } else if (option === 1 && program.stats) {
      console.log(`Total de links encontrados: ${response.length}`);
    } else {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magenta(
            item.href
          )} \nText: ${item.text}`
        );
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
