#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')
// tambah
.command('add','tambah')
.argument('<plus...>', 'plus number')
.action(function(args, options, logger){

const reducer = (accumulator,currentValue) => { return parseInt(accumulator) + parseInt(currentValue)};
console.log(args.plus.reduce(reducer))
})
// kurang
.command('subtract','kurang')
.argument('<min...>', 'minus number')
.action(function(args, options, logger){

const reducer = (a,b) => { return parseInt(a) - parseInt(b)};
console.log(args.min.reduce(reducer))
})
// kali
.command('multiply','kali')
.argument('<multi...>', 'kali number')
.action(function(args, options, logger){

const reducer = (accumulator,currentValue) => { return parseInt(accumulator) * parseInt(currentValue)};
console.log(args.multi.reduce(reducer))
})
// kali
.command('divide','bagi')
.argument('<div...>', 'bagi number')
.action(function(args, options, logger){

const reducer = (accumulator,currentValue) => { return parseInt(accumulator) / parseInt(currentValue)};
console.log(args.div.reduce(reducer))


});
prog.parse(process.argv);
