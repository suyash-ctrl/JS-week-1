let btn=document.querySelector(".btn");
let input=document.querySelector(".input");
let weather=document.querySelector(".temp");
let city=document.querySelector(".city");
let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let icon=document.querySelector(".icon");
async function getData(city){
    let promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f4de92560d09428b8c1102529261001&q=${city}&aqi=no`);
        return promise.json();
}
btn.addEventListener("click", async ()=>{
    let value=input.value;
    let result = await getData(value);
    console.log(result);
    city.innerText=`${result.location.name}, ${result.location.country}`
    temp.innerText=`${result.current.temp_c}°C`
    humidity.innerText=`${result.current.humidity}%`
    wind.innerText=`${result.current.wind_kph}km/hr`
    if(result.current.condition.text =='Clear'){
        icon.src="images/clear.png";
    }
    if(result.current.condition.text =='Partly Cloudy' || 
        result.current.condition=='Cloudy'){
        icon.src="images/clouds.png";
    }
    if(result.current.condition.text =='Rainy'){
        icon.src="images/rain.png";
    }
    if(result.current.condition.text =='Mist'){
        icon.src="images/mist.png";
    }

    document.querySelector(".weather").style.display='block';
})
