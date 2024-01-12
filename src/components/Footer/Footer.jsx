import { useState, useEffect } from 'react';

export const Footer = () => {

  const api = {
    key:  import.meta.env.VITE_WEATHER_API_KEY,
    base: import.meta.env.VITE_WEATHER_API_BASE
  }

  const [weatherData, setWeatherData] = useState({
    location: '',
    temperature: '',
    condition: ''
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&lang=es`); // Agregar &lang=es
        const data = await response.json();

        setWeatherData({
          location: capitalizeFirstLetter(data.name), // Utilizar función para capitalizar la primera letra
          temperature: `${Math.round(data.main.temp - 273.15)}°C`,
          condition: capitalizeFirstLetter(data.weather[0].description) // Utilizar función para capitalizar la primera letra
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          error => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    <footer className="footer pt-5 bg-light">
      <div>
        <p>{weatherData.location}</p>
        <p>{weatherData.temperature}</p>
        <p>{weatherData.condition}</p>
      </div>
      <div>
        <p className="footer__copyright bg-secondary text-white">© 2023 RollingVet</p>
      </div>
    </footer>
  )
}
