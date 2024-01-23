import React, { useEffect, useState, useRef } from "react";
import Map from "./Map";
import { CSSTransition } from "react-transition-group";

function WeatherHero(props) {
  console.log(props);
  const { location, currentWeather, isEnter } = props;
  const [backgroundImage, setBackgroundImg] = useState();
  const nodeRef = useRef(null);

  return (
    <div className="row container mainWeatherDiv">
      {location === undefined ? (
        <div className="row container mainWeatherDiv">
          <h1>Your Global Weather Resource</h1>
        </div>
      ) : (
        <CSSTransition
          in={isEnter}
          timeout={3000}
          appear={true}
          classNames="myClass"
        >
          <div className="row container ">
            <div className="col-lg-3 col-md-6 col-sm-12 icon">
              <h1 className="mainTemperature">{currentWeather.temp_f}°F</h1>
              <img src={currentWeather.condition.icon}></img>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 ">
              <h4>Local Time:&nbsp;{location.localtime.slice(10, 16)}</h4>
              <h2>
                {location.name},&nbsp;{location.region}
              </h2>
              <h3>
                <span className="badge badge-pill">{location.country}</span>
              </h3>
              <br />
              <h2>
                <span className="badge badge-pill">
                  Feels like:&nbsp;{currentWeather.feelslike_f}°F
                </span>
              </h2>
              <h2>
                <span className="badge badge-pill">
                  Humidity:&nbsp;{currentWeather.humidity}%
                </span>
              </h2>
              <h2>
                <span className="badge badge-pill">
                  Wind: {currentWeather.wind_dir} {currentWeather.wind_mph} mph
                </span>{" "}
              </h2>
              <h2>
                <span className="badge badge-pill">
                  {currentWeather.condition.text}
                </span>
              </h2>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Map latitude={location.lat} longitude={location.lon} />
            </div>
          </div>
        </CSSTransition>
      )}
    </div>
  );
}

export default WeatherHero;
