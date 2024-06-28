import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>('Belgrade');
  const apiKey = 'd0b5eddc05063bea6d8004d8654e59b1'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

 
  return (
    <div className='weather-container'>
      <h2>Vremenska Prognoza za {city}</h2>
      {weatherData ? (
        <div className='weather-info'>
          <p>Trenutna temperatura: {weatherData.main.temp} °C</p>
          <p>Opis: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Fetching weather data...</p>
      )}
      
      <button onClick={() => setCity('New York')}>
        {city === 'Belgrade' ? 'Prikaži vreme za New York' : 'Promeni grad'}
      </button>
    
    </div>
  );
};

export default WeatherComponent;