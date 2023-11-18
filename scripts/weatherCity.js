//Погода по названию города
const apikey = 'a5c367e7434a4ebe92b121324231511';
const inputCity = document.querySelector('#inputCity');
const form2 = document.querySelector('.form2');
const block = document.querySelector('.card-weather');

function removePreviousWeather(sselector){
    const prevInfo = document.querySelector(sselector);
    if(prevInfo) prevInfo.remove();
  }

  function showPlaceForCity(lat, lon, mapId){
    var map;
  
      DG.then(function () {
          map = DG.map(mapId, {
              center: [lat, lon],
              zoom: 13
          });
  
          DG.marker([lat, lon]).addTo(map);
      });
  }
  
  function showWeatherForCity(date, nameCity, temp, description, fileName, speedWind, mapId)
  {
      const html = 
      `<div class="card-weather" id="card-weather">
        <p>${nameCity}</p>
        <div class="container">
            <div class="weather-view">
              <img src=${fileName} alt="icon-weather" id="icon-weather">
              <p>${temp}°C</p>
            </div>
            <p id="date">${date}</p>
            <div class="description">
              <p>состояние<br>${description}</p>
              <p>ветер<br>${speedWind} m/c</p>                           
            </div>
          </div> 
      </div>
      <div id="${mapId}" class="map2"></div>`;
      document.querySelector('#weather-data').insertAdjacentHTML('afterend', html);
  }

  async function getWeatherForCity(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
    if(data.error){
      alert("Неверный ввод");
    }
    return data;
  }
  
  form2.onsubmit = async function(e){
      e.preventDefault();
      city = inputCity.value.trim();
      const data = await getWeatherForCity(city);
      const fileName = "./image/" + data.current.condition.icon.substring(35,(data.current.condition.icon).length);
      const mapId = 'map' + new Date().getTime();
      showWeatherForCity(data.current.last_updated, data.location.name, data.current.temp_c, data.current.condition.text, fileName, data.current.wind_kph, mapId);
      showPlaceForCity(data.location.lat, data.location.lon, mapId);
  }
