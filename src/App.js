import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./comonents/SearchBar/SearchBar";
import CurrentWeather from "./comonents/CurrentWeather/CurrentWeather";
import Forecast from "./comonents/Forecast/Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);        

  const apiKey = "479b1677fe3377fe4e3c8156e8c270a1";

  
  const fetchWeatherData = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Error fetching weather data. Please try again."
      );
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);
      setForecastData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Error fetching forecast data. Please try again."
      );
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
      fetchForecastData(city);
    }
  }, [city]);

  return (
    <div className="container mt-5   app-container">
      <h1 className="mb-4 text-center">Weather App</h1>
       <hr/>
      <SearchBar onCityChange={handleCityChange} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}
export default App;
