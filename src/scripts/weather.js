const lat = 45.4643;
const lon = 9.1895;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Europe%2FRome`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Estrai la temperatura attuale
    const currentTemperature = Math.floor(data.current_weather.temperature);

    // Estrai il codice meteo attuale
    const currentWeatherCode = data.current_weather.weathercode;

    const weatherImages = {
      'sereno': '/sunny.png',
      'nuvoloso': '/cloudy.png',
      'pioggia': '/rainy.png',
      'pioggia forte': '/stormy.png',
    };

    let weatherGroup;

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

    const weatherImage = weatherImages[weatherGroup] || './assets/sunny.png';

    // Visualizza la temperatura e l'immagine
    document.getElementById('temperature').textContent = `${currentTemperature}°C`;
    document.getElementById('weather-img').src = weatherImage;

    console.log(currentWeatherCode);
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });
