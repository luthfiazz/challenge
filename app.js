#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')

.command('lowercase','ganti jadi huruf kecil')
.argument('kecil')
.action((args, options, logger) => {
   logger.info(args.kecil.toLowerCase() );
})

.command('uppercase','ganti jadi huruf besar')
.argument('besar')
.action((args, options, logger) =>{ 
   logger.info(args.besar.toUpperCase() );
})

.command('capitalize','ganti jadi huruf awal besar')
.argument('kapital')
.action(function(args, options, logger){
    const items = args.kapital.split(' ');
    const capitalize=items.map(item=>item.charAt(0).toUpperCase()+item.substring(1)).join(' ')

console.log(capitalize);    
});
prog.parse(process.argv);    
