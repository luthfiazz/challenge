#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')

.command('ip')
// .argument('<obs>', 'obf')
.action(function(args, options, logger){
    const internalIp = require('internal-ip');
 
    internalIp.v4().then(ip => {
        console.log(ip);
    });
     
    // console.log(internalIp.v4.sync())
});

prog.parse(process.argv);



