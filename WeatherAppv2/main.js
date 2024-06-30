const apiKey =  "7f68f2c02c527643e3387953e08049aa";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
    const response = await fetch(`${url}${city}&appid=${apiKey}`);
    if(response.status == 404){
        alert("Invaild City Name");
        return; 
    }
  
    var data = await response.json();
    var newDiv = document.createElement('div');
    newDiv.className="child";

    var weatherIcon = document.createElement('img');
    var newH1 = document.createElement('h1');
    var newH2 = document.createElement('h2');

    newH1.innerHTML= Math.round(data.main.temp) + "°C";
    newH2.innerHTML = data.name;
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="images/snow.png";
    }
    newDiv.appendChild(weatherIcon);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newH2);

    document.querySelector('.container-answer').appendChild(newDiv);

}

var btn = document.querySelector('button');

btn.addEventListener('click',function(){
   
    var listCity = document.querySelector('textarea');
    var text = listCity.value.split("\n");
    console.log(text);
    document.querySelector('.container-answer').innerHTML="";
    for(var i =0;i<text.length;i++){

        checkWeather(text[i]);
    }

});
