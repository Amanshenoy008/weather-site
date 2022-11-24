console.log('hel')

const getdata =()=>{

   var loc= document.getElementById('i1').value
   
   console.log(loc)

   fetch('http://api.openweathermap.org/data/2.5/weather?q='+loc+'&APPID=3df82971822e06a68c54b02dd562451a')
   .then(res=> res.json())
   .then(data=>{

    console.log(data)
    document.getElementById('p0').innerHTML=data.name
    document.getElementById('p1').innerHTML=data.main.humidity
    document.getElementById('p2').innerHTML=data.main.pressure
    document.getElementById('p3').innerHTML=data.main.temp
    document.getElementById('w1').innerHTML=data.wind.speed
    document.getElementById('w2').innerHTML=data.wind.deg


   if(data.weather[0].main == "Clouds"){
        document.getElementById('icon').src='./images/cloudy-day.png'
   }
   else if(data.weather[0].main == "Mist"){
    document.getElementById('icon').src='./images/foggy.png'

   }
   else if(data.weather[0].main == "Rainy"){
    document.getElementById('icon').src='./images/rainy.png'

   }
   else{
    document.getElementById('icon').src='./images/sun.png'
   }


   })
   .catch(err=>{
    console.log(err)
   })

}

