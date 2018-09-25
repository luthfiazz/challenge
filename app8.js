#!/usr/bin/env node

const cheerio = require('cheerio');
const request = require('request');

const prog = require('caporal');
prog.version('1.0.0')
.command('headlines', 'get headlines')
  .action(function(args,options,logger){

    let url= "https://www.kompas.com/"
    request(url,function(err,response,body){
    if(!err && response.statusCode === 200){
    const $ = cheerio.load(body)

   
    let medium = $('.headline__thumb__title')
    


    medium.map((i,e) =>{
        let mediumTitle = $(e).text()
        let link = $(e).parent().attr('href')
        console.log('Title: ' + mediumTitle + '\n' + 'url: ' + link)
    })
    
    
    }
      
    })

  })


  prog.parse(process.argv);
