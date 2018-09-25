#!/usr/bin/env node
const prog = require('caporal');
prog
  .version('1.0.0')
//   random
  .command('random', 'Deploy an application')
  .option('--length', 'Tail <lines> lines of logs after deploy', prog.INT)
  .option('--letters', 'Tail <lines> lines of logs after deploy', prog.BOOLEAN)
  .option('--numbers', 'Tail <lines> lines of logs after deploy', prog.INT)
  .option('--uppercase', 'Tail <lines> lines of logs after deploy', prog.INT)
  .option('--numbers', 'Tail <lines> lines of logs after deploy', prog.INT)
  .action(function(args, options, logger) {

    const text  = Math.random().toString().replace('0.', '');
  
    
    console.log(text); 
    
    

});

prog.parse(process.argv);


