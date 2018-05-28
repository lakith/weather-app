 const yargs = require('yargs');

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
geo_code.get_geocode(uri);


//"1301 Lombard street philadelphia"
