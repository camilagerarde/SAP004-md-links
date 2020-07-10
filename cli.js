#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const package = require('./package.json');
const mdLinks = require('./index');

program
  .version(package.version)
  .description('Search and validate markdown links in files or directories.')
  .option('-v, --validate [validate]', 'Returns validated links')
  .option('-s, --stats [stats]', 'Returns link stats')
  .parse(process.argv);

let path = program.args[0];
let options = { validate: program.validate, stats: program.stats };

mdLinks(path, options)
  .then((response) => {
    if (options.validate) {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magenta(
            item.href
          )} \nText: ${chalk.bold(item.text)} \nStatus: ${chalk.cyan(
            item.validate
          )}`
        );
      });
    } else if (options.stats) {
      const links = response.map((i) => i.href);
      const uniqueLinks = new Set(links);
      const brokenLinks = response.filter((i) => i.validate !== '200 OK');
      console.log(
        chalk.bold(
          `\nTotal links: ${chalk.magenta(
            response.length
          )}\nUnique links: ${chalk.magenta(
            uniqueLinks.size
          )}\nBroken links: ${chalk.magenta(brokenLinks.length)}
          `
        )
      );
    } else {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magenta(
            item.href
          )} \nText: ${chalk.bold(item.text)}`
        );
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
