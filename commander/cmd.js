#!/usr/bin/env node
const { program } = require("commander");

program
    .version("0.0.1")
    .option("-c, --code", "Setup coding environment")
    .parse(process.argv);

const opts = program.opts();

if (opts.code) console.log("You have chosen to start coding!")
