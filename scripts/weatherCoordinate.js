//Погода по координатам

const apiKey = '42d9cd280fff5048e30bd2367266d2af';
const inputW = document.querySelector('#inputWidth');
const inputL = document.querySelector('#inputLong');
const form = document.querySelector('.form1');
const article = document.querySelector('#map');

function removePrevious(sselector){
  const prevElem = document.querySelector(sselector);
  if(prevElem) prevElem.remove();
}

function showWeather(nameCity, temp, description, fileName, speedWind, dateStr){
  let temp_c = Math.floor(temp);
  removePrevious('#card');
  const html = `<div class="card-weather" id="card">
                  <p>${nameCity}</p>
                  <div class="container">
                      <div class="weather-view">
                          <img src="${fileName}" alt="icon-weather" id="icon-weather">
                          <p>${temp_c}°C</p>
                      </div>
                      <p id="date">${dateStr}</p>
                      <div class="description">
                          <p>состояние<br>${description}</p>
                          <p>ветер<br>${speedWind} m/c</p>                           
                      </div>
                  </div>
                </div>`;
    article.insertAdjacentHTML('beforebegin', html);
}

function showDate(date){
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear();
  removePrevious('.date');
  dateStr = `${day}.${month}.${year} ${hour}:${minutes}`;
  return dateStr;
}

let map;
let marker;

function showPlace(lat, lon){
  DG.then(function () {
    if (!map) {
      map = DG.map('map', {
        center: [lat, lon],
        zoom: 13
      });
    } else {
      map.setView([lat, lon]);
    }
    if (marker) {
      marker.setLatLng([lat, lon]);
    } else {
      marker = DG.marker([lat,lon]).addTo(map);
    }
  });
}

async function getWeather(lat, lon){
  const query = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const responce = await fetch(query);
  const data = await responce.json();
  console.log(data);
  if(data.cod == '400'){
    alert('Неверный ввод');
  }
  return data;
}


form.onsubmit = async function(e){
  e.preventDefault();
  lat = inputW.value.trim();
  lon = inputL.value.trim();
  const data = await getWeather(lat,lon);
  const date = new Date((data.dt)*1000);
  let dateStr = showDate(date);
  const fileName = "./image/" + data.weather[0].description + '.png';
  showPlace(lat, lon);
  showWeather(data.name, data.main.temp, data.weather[0].description, fileName, data.wind.speed, dateStr);
}
