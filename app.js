 const yargs = require('yargs');
 const request = require('request');

 const geo_code = require('./geo-code/geo-code');

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

//console.log(argv);

var uri = encodeURIComponent(argv.address);
//console.log(uri);
geo_code.get_geocode(uri,(errorCode,result)=>
    {
        if(errorCode){
            console.log(errorCode);
        } else {
            console.log (JSON.stringify(result,undefined,2));
        }
    });

    console.log("Weather Details");

    request({
        url:'https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/37.8267,-122.4233',
        json:true
    },(error,response,body)=>{

        if(error){
            console.log('something went wrong');
        } else {
            console.log("Current weather summery - "+body.currently.summary);
            console.log("Current temperature - "+body.currently.temperature);
            console.log("Current humidity - "+body.currently.humidity);
        }


    });



//"1301 Lombard street philadelphia"
//https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/37.8267,-122.4233