const request = require('request');

var get_geocode = (uri,callback) =>
{
    request({
        url :'http://maps.googleapis.com/maps/api/geocode/json?address='+uri
        ,json:true
    },(error,respnse,body)=>
    {
        if(error)
        {
            callback('unable to connect to the google server');
            //console.log('unable to connect to the google server');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Invalied Adress.');
            //console.log('Invalied Adress.');
        }else if(body.status === 'OK'){
       //console.log(JSON.stringify(body,undefined,2));
            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                langitude : body.results[0].geometry.location.lng
            })
          //  console.log(`Address = ${body.results[0].formatted_address}`);
          //  console.log(`lat = ${body.results[0].geometry.location.lat}`);
          //  console.log(`lat = ${body.results[0].geometry.location.lng}`);
        }else
        {
            console.log('Something went wrong. Try again.');
        }
    });
}

module.exports =
{
    get_geocode
}