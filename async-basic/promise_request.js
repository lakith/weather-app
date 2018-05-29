const request = require('request');

var geoCode = (address) => {

    return new Promise((resolve, reject) =>
    {

        request({
            url :'http://maps.googleapis.com/maps/api/geocode/json?address='+address
            ,json:true
        },(error,respnse,body)=>
        {
            if(error)
            {
                //callback('unable to connect to the google server');
                reject('unable to connect to the google server');
                //console.log('unable to connect to the google server');
            }else if(body.status === 'ZERO_RESULTS'){
                //callback('Invalied Adress.');
                reject('Invalied Adress.');
                //console.log('Invalied Adress.');
            }else if(body.status === 'OK'){
        //    //console.log(JSON.stringify(body,undefined,2));
        //         callback(undefined, {
        //             address:body.results[0].formatted_address,
        //             latitude : body.results[0].geometry.location.lat,
        //             langitude : body.results[0].geometry.location.lng
        //         });
                resolve({
                    address:body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    langitude : body.results[0].geometry.location.lng
                });
              //  console.log(`Address = ${body.results[0].formatted_address}`);
              //  console.log(`lat = ${body.results[0].geometry.location.lat}`);
              //  console.log(`lat = ${body.results[0].geometry.location.lng}`);
            }else
            {
                // console.log('Something went wrong. Try again.');
                reject('Something went wrong. Try again.');
            }
        });

    });
    
};

geoCode(1234).then((location)=>{
                console.log(`\n\n\tAddress = ${location.address}`);
                console.log(`\tlat = ${location.latitude}`);
                console.log(`\tlat = ${location.langitude}`);
},(errorMessage)=>{
                console.log(errorMessage);
});
