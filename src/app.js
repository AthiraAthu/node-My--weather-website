
const weatherInfo=require('./utils/weatherApp')
const express=require('express')
const hbs=require('hbs')

const app=express()
const port=process.env.PORT || 3000

const path=require('path')
const findWeather = require('./utils/weatherApp')


const publicDirectoryPath=path.join(__dirname,'../public')
const templatePath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')




app.set('view engine','hbs') 
app.set('views',templatePath)

hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{title:'Weather',name:'Athira'})
})

app.get('/about',(req,res) =>{
    res.render('about',{title:'About me',name:'Athira'})
})

app.get('/help',(req,res) =>{
    res.render('help',{title:'Help',name:'Athira'})
})




//Integrating weather app
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send("You must provide an address")
    }
    weatherInfo(req.query.address,(data)=>{
        if(data==='404'){
            return res.send({error:'Invalid address'})
        }
    
    res.send({weatherInformation:data,location:req.query.address})

    })


})

app.get('/help/*',(req,res)=>{
    res.render('error',{message:"Help article not found",title:"Static Text",name:"Athira"})
})

app.get('*',(req,res)=>{
    res.render('error',{message:"Page not found",title:"Static Text",name:"Athira"})
})

app.listen(port, ()=>{
    console.log('Server is on port 3000')
})
