const lat = 45.4643;
const lon = 9.1895;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe%2FRome`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const currentTemperature = Math.floor(data.current_weather.temperature);

    const currentWeatherCode = data.current_weather.weathercode;

    console.log(currentWeatherCode)

    const currentHour = new Date().getHours();

    const weatherImages = {
      'sereno': '/sunny.png',
      'nuvoloso': '/cloudy.png',
      'pioggia': '/rainy.png',
      'pioggia forte': '/stormy.png',
      'notte': '/moon.png',

    };

    let weatherGroup;

    if (currentHour >= 18 || currentHour < 6) {
      weatherGroup = 'notte';
    } else {
    if (currentWeatherCode === 0) {
      weatherGroup = 'sereno';
    } else if ([1, 2, 3].includes(currentWeatherCode)) {
      weatherGroup = 'nuvoloso';
    } else if ([4, 5].includes(currentWeatherCode)) {
      weatherGroup = 'pioggia';
    } else if ([6].includes(currentWeatherCode)) {
      weatherGroup = 'pioggia';
    } else if ([7, 8, 9].includes(currentWeatherCode)) {
      weatherGroup = 'neve';
    } else {
      weatherGroup = 'condizione sconosciuta';
    }
  }

    const weatherImage = weatherImages[weatherGroup] || '/undefined.png';

    document.getElementById('temperature').textContent = `${currentTemperature}°`;
    document.getElementById('weather-img').src = weatherImage;

    console.log(currentWeatherCode);
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });
