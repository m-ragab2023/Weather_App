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

  const apiKey = "479b1677fe3377fe4e3c8156e8c270a1"; // ضع مفتاح API الخاص بك هنا
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetchWeatherData();
    fetchForecastData();
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(weatherApiUrl);
      setWeatherData(response.data);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(forecastApiUrl);
      setForecastData(response.data);
    } catch (error) {
      setError("Error fetching forecast data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
    fetchWeatherData();
    fetchForecastData();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Weather App</h1>
      <SearchBar onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <CurrentWeather data={weatherData} />
      <Forecast data={forecastData} />
    </div>
  );
}

export default App;
