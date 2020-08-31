
const request=require('request')

const findWeather= (address,callback)=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=8770e174965014c5f824dad3ef2acc21`

    request(url,(error, response, body) => {
        const data=JSON.parse(body)
        if(data.cod==='404'){
            callback(data.cod)
        }
        else{
            callback(`Temperature : ${data.main.temp} C , Humidity : ${data.main.humidity} % , Wind : ${data.wind.speed} m/s`)
        }
        

        
        
        
})

}

module.exports=findWeather