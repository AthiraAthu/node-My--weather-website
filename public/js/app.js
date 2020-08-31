const myForm=document.querySelector('form')
const searchData=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')
message1.textContent=''
message2.textContent=''
myForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const location=searchData.value
    if(!location){
        message1.textContent="please enter an address"
        message2.textContent=''
        return
    }
    fetch(`/weather?address=${location}`).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            console.log('Invalid Address')
            message1.textContent='Invalid Address'
            message2.textContent=''
        }
        else{
            message1.textContent="Location : "+data.location
            message2.textContent=data.weatherInformation
        }
    })
})

})