const btnSearch=document.getElementById("btnSearch");
const searchBar=document.getElementById("search-bar");
let weather={
    apikey:"ca3f2da225ac47401206b348d2499048",
    fetchWeather:function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apikey}`
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name+" "+icon+" "+description+" "+temp+" "+humidity+" "+speed);
        document.getElementById("city").innerText=name;
        document.getElementById("temp").innerText=temp+"°C";
        document.getElementById("icon").src=`https://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById("description").innerText=description;
        document.getElementById("humidity").innerText="Humidity: "+humidity+"%";
        document.getElementById("wind").innerText=`Wind Speed: ${speed} km/h`;
        document.getElementById("weather").classList.remove('isLoading');
        document.body.style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${name}')`;
    },
    search:()=>{
       const city= document.getElementById("search-bar");
       weather.fetchWeather(city.value);
       city.value="";
    }
}
btnSearch.addEventListener("click",(e)=>{
  weather.search();
});
searchBar.addEventListener('keyup',(e)=>{
    if(e.key==='Enter')
    weather.search();
});

weather.fetchWeather("Delhi");
