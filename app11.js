#!/usr/bin/env node

const fs = require('fs');
const capture = require('capture-phantomjs');


const prog = require('caporal');
prog.version('1.0.0')
.command('screenshot-list', 'get screenshoot txt')
  .argument('listarg')
  .option('--format','format image',prog.STRING,'jpg')
  .action(function(args,options,logger){
      fs.readFile('list.txt','utf-8',(err,data) => {

        let text = data.split('\n')
        //console.log(typeof text)
        
        for(let i =0;i < text.length;i++){
          // console.log(typeof text[i].replace(/[/]/,'-'))
          let b = text[i].replace(/[/]/g,'-')
          console.log(typeof text[i])
          capture({
            url : text[i],
            width:1024,
            height:768
          }).then(screenshot => {
            fs.writeFileSync(`${__dirname}/${b}.jpg`,screenshot)
            //let m =+ text[i]
            console.log(text[i]) 
           
          })
          //console.log(text[i])
        }
      })
  })

  prog.parse(process.argv);