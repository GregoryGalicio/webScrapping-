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
   console.log(websiteHeading.text().trim());
   const quote = $('.quote').find('a');
   console.log(quote.html());


   const  thrid_quote = $(".quote").next().next();
   //console.log(thrid_quote.html());

   const containerClass = $(".row .col-md-8").parent().next();
   console.log(containerClass.html());
}

iniciar();
