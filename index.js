const request = require('request');
const yargs = require('yargs');

const argv = yargs.argv;

const apiKey = process.env.APIKEY;
const city = argv.c || 'Kyiv';
const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url,(err,response,body)=>{
    if(err) {
        console.log('Something went wrong!',err);

    }else{
        const weather = JSON.parse(body);
        const tempC = weather.main.temp;
        const msg =`It's ${tempC} degress in ${weather.name}!`
        console.log(msg);
    }
});

