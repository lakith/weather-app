const yargs = require('yargs');
const request = require('request');
const axios = require('axios');


const geo_code = require('./geo-code/geo-code');
const weather_date = require('./weather-data/wather_data');

const argv = yargs.options({
   address:{
       demand:true,
       alies:'a',
       discribe:'Enter your address',
       string:true
   }
})
.help()
.alias('help','h')
.argv

var uri = encodeURIComponent(argv.address);
var geo_address = 'http://maps.googleapis.com/maps/api/geocode/json?address='+uri;

axios.get(geo_address).then((response)=>{

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Invalied Adress.');
    }

    // console.log(JSON.stringify(response.data, undefined, 2)+"\n\n");

    var lat = response.data.results[0].geometry.location.lat;
   
    var lan = response.data.results[0].geometry.location.lng;
    console.log("latitude = "+ lat+"  longitude =  "+lan);
    var weather =  `https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/${lat},${lan}`;

    return axios.get(weather);

}).then((resultTemp)=>{

    var summery = resultTemp.data.currently.summary;
    var temprature = resultTemp.data.currently.temperature;
    var humidity = resultTemp.data.currently.humidity;

        console.log("\n\n\n\t\tCurrent weather summery - "+summery);
        console.log("\t\tCurrent temperature - "+temprature);
        console.log("\t\tCurrent humidity - "+humidity+"\n\n");

}).catch((errorMessage)=>{

    if(errorMessage.code === 'ENOTFOUND'){
        console.log('Unable to connect to the API server');
    }
    console.log(errorMessage);
});
