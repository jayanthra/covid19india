const router = require('express').Router();
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.mohfw.gov.in/';
const statelocation = require('./locations');
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
const csv = require('csvtojson')


let cases = []

const loadRequest = {
  loadData() {
   return csv().fromStream(rp(BASE_URL))
         .subscribe((json)=>{
         return json
   });
 }
}

router.route('/india').get((req, res) => {
  cases = []
  rp(url).then(function(result) {
    const $ = cheerio.load(result);
    $('body table > tbody > tr').each((index, element) => {
      const tds = $(element).find("td");
      const state = $(tds[1]).text();
      const confirmed_indian = $(tds[2]).text();
      const confirmed_foreign = $(tds[3]).text();
      const recovered = $(tds[4]).text();
      const dead = $(tds[5]).text();
      const total = parseInt(confirmed_indian) + parseInt(confirmed_foreign)
      const location = statelocation[state] ? statelocation[state] : {lat: '',long:''}
      const tableRow = {state,confirmed_indian, confirmed_foreign, total,recovered, dead,location}
      cases.push(tableRow)
    });
    cases.pop()
    res.send(cases)
  })
});

router.route('/world').get((req, res) => {
  loadRequest.loadData().then(resp => {
    locations = []
    resp.forEach(item => {
      let objCopy = Object.assign({}, item);
      delete objCopy['Province/State']
      delete objCopy['Country/Region']
      delete objCopy['Lat']
      delete objCopy['Long']
      total = 0
      for (let key in objCopy) {
        total = objCopy[key]
      }
      let newItem = {
        country : item['Country/Region'],
        province: item['Province/State'],
        coordinates: {
          lat:  item['Lat'],
          long: item['Long'],
        },
        cases: objCopy ,
        total: total
      }
      locations.push(newItem)
    })
    res.json(locations)
  })
});

module.exports = router;

