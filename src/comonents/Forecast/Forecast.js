import React from "react";

function Forecast({ data }) {
  if (!data) return null;

  return (
    <div className="forecast-container mt-4">
      <h3 className="text-center">5-Day Forecast</h3>
      <div className="d-flex justify-content-around flex-wrap">
        {data.list
          .filter((_, index) => index % 8 === 0)
          .map((forecast, index) => (
            <div
              key={index}
              className="forecast-item text-center p-2 m-2 border rounded">
              <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <p>{forecast.main.temp}°C</p>
              <p>{forecast.weather[0].description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Forecast;
