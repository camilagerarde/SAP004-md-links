#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const package = require("./package.json");
const mdLinks = require("./index");

program.version(package.version);
program.option("-v, --validate [validate]").parse(process.argv);

let path = program.args[0];
let option = program.validate;

mdLinks(path, option)
  .then((response) => {
    response.forEach((item) => {
      if (option) {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.green(
            item.href
          )} \nText: ${item.text} \nStatus: ${chalk.blue(item.validate)}`
        );
      } else {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.green(
            item.href
          )} \nText: ${item.text}`
        );
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
