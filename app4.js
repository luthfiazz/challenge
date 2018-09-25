#!/usr/bin/env node
const prog = require('caporal');


prog.version('1.0.0')

.command('obfuscate')
.argument('<obs>', 'obf')
.action(function(args, options, logger){
const items= args.obs.split('');
const ob =items.map((item=>'&#'+item.charCodeAt()+';')).join('');
logger.info(ob);

});

prog.parse(process.argv);


