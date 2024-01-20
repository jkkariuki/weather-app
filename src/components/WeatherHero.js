import React, { useEffect, useState } from "react";

function WeatherHero(props) {
  console.log(props);
  const { location, currentWeather } = props;
  const [backgroundImage, setBackgroundImg] = useState();

  return (
    <div className="row container mainWeatherDiv">
      {location === undefined ? (
        <div className="row container mainWeatherDiv">
          <h1>Your Global Weather Resource</h1>
        </div>
      ) : (
        <div className="row container ">
          <div className="col-lg-6 col-md-12 col-sm-12 icon">
            <h1 className="mainTemperature">{currentWeather.temp_f}°F</h1>
            <img src={currentWeather.condition.icon}></img>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <h4>Local Time:&nbsp;{location.localtime.slice(10, 16)}</h4>
            <h2>
              {location.name},&nbsp;{location.region}
            </h2>
            <p>{location.country}</p>
            <span>Feels like:&nbsp;{currentWeather.feelslike_f}°F</span>
            <br />
            <br />
            <span>Humidity:&nbsp;{currentWeather.humidity}%</span>
            <br />
            <br />
            <span>
              Wind: {currentWeather.wind_dir} {currentWeather.wind_mph} mph
            </span>{" "}
            <br />
            <br />
            <span>{currentWeather.condition.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherHero;
