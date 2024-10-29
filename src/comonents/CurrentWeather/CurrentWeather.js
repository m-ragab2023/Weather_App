import React from "react";

function CurrentWeather({ data }) {
  if (!data) return null;

  return (
    <div className="current-weather text-center mb-4">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}

export default CurrentWeather;
