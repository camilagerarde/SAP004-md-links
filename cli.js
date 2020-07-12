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

const path = program.args[0];
const options = { validate: program.validate, stats: program.stats };

mdLinks(path, options)
  .then((res) => {
    const totalLinks = res.map((item) => item.href);
    const uniqueLinks = new Set(totalLinks);
    const brokenLinks = res.filter((item) => item.validate !== '200 OK');
    if (options.validate && options.stats) {
      console.log(
        chalk.bold(
          `\nTotal links: ${chalk.cyan(res.length)}\nUnique links: ${chalk.cyan(
            uniqueLinks.size
          )}\nBroken links: ${chalk.cyan(brokenLinks.length)}\n`
        )
      );
    } else if (options.stats) {
      console.log(
        chalk.bold(
          `\nTotal links: ${chalk.magenta(
            res.length
          )}\nUnique links: ${chalk.magenta(uniqueLinks.size)}\n`
        )
      );
    } else {
      res.forEach((item) => {
        if (options.validate) {
          console.log(
            `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magentaBright(
              item.href
            )} \nText: ${chalk.bold(item.text)} \nValidate: ${chalk.cyanBright(
              item.validate
            )}`
          );
        } else {
          console.log(
            `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.magentaBright(
              item.href
            )} \nText: ${chalk.bold(item.text)}`
          );
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
