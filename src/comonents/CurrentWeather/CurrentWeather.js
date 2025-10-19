import React from "react";

function CurrentWeather({ data }) {
  if (!data) return null;

  return (
    <div className="current-weather text-center mb-4" dir="rlt">
      <h2>{data.name}</h2>
      <p>درجة الحرارة: {Math.round(data.main.temp)}</p>
      <p>الطقس: {data.weather[0].description}</p>
      <p>نسبة الرطوبة : {data.main.humidity}</p>
      <p> سرعة الرياح : {data.wind.speed}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}

export default CurrentWeather;
