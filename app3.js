#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')

.command('palindrome')
.argument('<pali>', 'palindro')
.action((args, options, logger)=>{
const kalimat =args.pali;
const kalimat2 =kalimat.split('').reverse().join('');


logger.info('string :',kalimat);


if(kalimat === kalimat2){
logger.info('Is palindrome? yes');
}else{
 logger.info('Is palindrome? no');
}

    
});

prog.parse(process.argv);

