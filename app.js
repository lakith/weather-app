 const yargs = require('yargs');
 const request = require('request');


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

//console.log(argv);

var uri = encodeURIComponent(argv.address);
//console.log(uri);
geo_code.get_geocode(uri,(errorCode,result)=>
    {
        if(errorCode){
            console.log(errorCode);
        } else {
            console.log (JSON.stringify(result,undefined,2));

            weather_date.weather(result.latitude,result.langitude, (errorCode,weatherResult)=>{

                if(errorCode)
                {
                    console.log(errorCode);
                }else {
                    
                    console.log(JSON.stringify(weatherResult,undefined,2));
                }
            
            });
        }
    });

    





//"1301 Lombard street philadelphia"
//https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/37.8267,-122.4233