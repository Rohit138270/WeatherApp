let weather = {
    "apiKey":"915971574e00bfe6f0d2631f23f059d3",
    fetchWeather: function () {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
           
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"04n.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"; 
        document.querySelector(".humidity").innerText = "humidity" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed" + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + name +"')";


    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});
