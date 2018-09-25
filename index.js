const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.kompas.com/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp('https://www.kompas.com/')
.then((htmlstring)=>{
  const $ = cheerio.load(htmlstring);
  $('h1.headline').text('Title:')
  $('a.headline').text('URL:')

  console.log($('.headline__big__title').html())
  console.log($('.headline__big__link').html())
})
.catch((err)=>{
  console.log (err);
});



