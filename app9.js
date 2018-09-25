#!/usr/bin/env node
const XLSX = require('xlsx')

const prog = require('caporal');
prog.version('1.0.0')
.command('convert', ' convert txt')
  .argument('<tocsv>','convert to csv')
  .argument('<tocsv2>','convert to csv')
  .action(function(args,options,logger){

  
    XLSX.writeFile(XLSX.readFile(args.tocsv),args.tocsv2)

  });

  prog.parse(process.argv);
