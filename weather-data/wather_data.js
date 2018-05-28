const request = require('request');


var weather = (lat, lan , callback) =>{


request({
    url:`https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/${lat},${lan}`,
    json:true
},(error,response,body)=>{

    if(error){
        callback('Cannot connect to the server');
    }else if (body.code === 400){
        callback('invalied location');
    } else if (!error && response.statusCode === 200) {
        
        callback (undefined , {
            summery : body.currently.summary,
            Temperature : body.currently.temperature,
            Humidity : body.currently.humidity

        })
        // console.log("Current weather summery - "+body.currently.summary);
        // console.log("Current temperature - "+body.currently.temperature);
        // console.log("Current humidity - "+body.currently.humidity);
    }else{
        callback('Something went wrong');
    }


});
}

module.exports = 
{
    weather
}