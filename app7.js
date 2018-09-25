#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')

.command('ip-external')
// .argument('<obs>', 'obf')
.action(function(args, options, logger){

    'use strict';
 
    const getIP = require('external-ip')();
     
    getIP((err, ip) => {
        if (err) {
           
            throw err;
        }
        console.log(ip);
    });const publicIp = require('external-ip');
});

prog.parse(process.argv);







