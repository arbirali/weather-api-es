export default function getWeatherList (weatherList) {

  return weatherList.map( weather => {

    return `
      <div class="col">
        <div class="card">
          <div class="card-body">
            <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" />
            <h3>${weather.main}</h3>
            <span class="description">${weather.description}</span>
          </div>
        </div>
      </div>
    `
  });
}
