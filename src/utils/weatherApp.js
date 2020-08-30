
const request=require('request')

const findWeather= (address,callback)=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=8770e174965014c5f824dad3ef2acc21`

    request(url,(error, response, body) => {
        let res='';
        const data=JSON.parse(body)
        if(data.cod==='404'){
            res=res+data.cod
        }
        else{
            res=res+data.main.temp
        }
        
        callback(res)

        
        
        
})

}

module.exports=findWeather