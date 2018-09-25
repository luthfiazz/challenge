#!/usr/bin/env node

const cheerio = require('cheerio');
const request = require('request');

const prog = require('caporal');
prog.version('1.0.0')

.command('movies', 'get scraping movies')
  .action(function(args,options,logger){
    
    let url= "https://www.cgv.id/en/movies/now_playing"
    const url2 = "https://www.cgv.id"
    request(url,function(err,response,body){

      const $ = cheerio.load(body)
      let linkP = $('.movie-list-body > ul > li')
  
        linkP.map((i,e)=>{
        let movieTitle = $(e).children().attr('href')
        let c = url2 + movieTitle
        // console.log(c)
        request(c,(err,response,data)=>{
            const x = cheerio.load(data)
            let a = x('.movie-info-wrapper')
            console.log(a.text())
            // console.log(x.html())
            // console.log("\nData :",a.text())
            
        })

      
        //console.log(c)
          //request(movieTitle)
        })

    })
       })

    

  prog.parse(process.argv);