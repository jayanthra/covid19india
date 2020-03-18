const router = require('express').Router();
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.mohfw.gov.in/';
const statelocation = require('./locations');


let cases = []

router.route('/all').get((req, res) => {
  cases = []
  rp(url).then(function(result) {
    const $ = cheerio.load(result);
    $('body > div:nth-child(3) > div > div > div > ol > strong > strong > strong > div > table > tbody > tr').each((index, element) => {
      if(index===16) return
      const tds = $(element).find("td");
      const state = $(tds[1]).text();
      const confirmed_indian = $(tds[2]).text();
      const confirmed_foreign = $(tds[3]).text();
      const recovered = $(tds[4]).text();
      const dead = $(tds[5]).text();
      const total = parseInt(confirmed_indian) + parseInt(confirmed_foreign)
      const location = statelocation[state]
      const tableRow = {state,confirmed_indian, confirmed_foreign, total,recovered, dead,location}
      cases.push(tableRow)
    });
    res.send(cases)
  })
});

module.exports = router;

