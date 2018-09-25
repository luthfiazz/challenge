#!/usr/bin/env node

const web= require("node-webshot");

const prog = require('caporal');
prog.version('1.0.0')

.command('screenshots', 'get screenshoot url')
  .action(function(args,options,logger){

      let option = {
        streamType: 'png',
        windowSize: {
          width: 1024,
          height: 786
        },
        shotSize: {
          width: "all",
          hegiht: "all"
        }
      };
     
      web('google.com',`screenshot-001.png`,option,(err)=>{
        if(err){
          return console.log(err);
        }
        console.log("image succes create");
      });
    
    
     
  })

    
  prog.parse(process.argv);
