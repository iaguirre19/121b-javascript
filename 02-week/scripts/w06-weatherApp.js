function createWeatherCard(state) {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    weatherCard.innerHTML = `<h2>${state}</h2>`;
    return weatherCard;
  }
  
  function fillWeatherCard(weatherCard, data) {
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherCard.appendChild(temperature);
  
    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherCard.appendChild(humidity);
  
    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherCard.appendChild(windSpeed);
  
    const description = document.createElement('p');
    description.textContent = `Description: ${data.weather[0].description}`;
    weatherCard.appendChild(description);
  
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  
    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = data.weather[0].main;
    weatherCard.appendChild(icon);

    const weatherCondition = data.weather[0].main.toLowerCase();
    weatherCard.classList.add(getWeatherClass(weatherCondition));
  }
  
  
  function getWeatherClass(weatherCondition) {
    switch (weatherCondition) {
      case 'clear':
        return 'sunny';
      case 'clouds':
        return 'cloudy';
      case 'rain':
        return 'rainy';
      default:
        return '';
    }
  }
  

  
  const main = () => {
    const apiKey = '4612d6054a1e0b0f21e1dcf35dea5140';
    const states = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico City', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];
    const weatherContainer = document.getElementById('weather');





    states.forEach(state => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state},MX&appid=${apiKey}&units=metric`;
        const weatherCard = createWeatherCard(state);
        weatherContainer.appendChild(weatherCard);
  
      fetch(url)
        .then(response => response.json())
        .then(data => fillWeatherCard(weatherCard, data))
        .catch(error => console.error('Error fetching weather data:', error));
    });
  }
  
  document.addEventListener('DOMContentLoaded', main);
  