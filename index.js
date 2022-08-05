//archivo que arrancara el script para analizar un sitio web
//utlizaremos biblioteca Cheerio
//utilizaremos request, utiliza callbacks
//request promises
const cheerio = require('cheerio');
const request = require('request-promise');

async function iniciar(){
    const $ = await request({
        uri:'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });

   const websiteTitle = $('title');
   console.log(websiteTitle.html());

   const websiteHeading = $('h1');
   console.log(websiteHeading.html());
}


iniciar();
