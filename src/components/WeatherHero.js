import React, { useEffect, useState, useRef } from "react";
import Map from "./Map";
import { CSSTransition } from "react-transition-group";
import BadgePill from "./BagePill";
import ForecastDayCard from "./ForecastDayCard";

function WeatherHero(props) {
  console.log(props);
  const { location, currentWeather, isEnter, forecast } = props;
  const [backgroundImage, setBackgroundImg] = useState();
  const nodeRef = useRef(null);

  function militaryTime(time) {
    time = time.split(":");
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }
    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM
    return timeValue;
  }

  return (
    <div>
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
          // nodeRef={nodeRef}
        >
          <div className="row container ">
            <div className="col-lg-4 col-md-6 col-sm-12 icon">
              <div className="card">
                <div className="card-body">
                  <h1 className="mainTemperature">{currentWeather.temp_f}°F</h1>
                </div>
                <div className="card-img-top">
                  <img src={currentWeather.condition.icon}></img>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <h4>
                <BadgePill
                  labelValue={
                    "Local Time: " +
                    militaryTime(location.localtime.slice(10, 16))
                  }
                />
              </h4>
              <h2>
                <BadgePill
                  labelValue={location.name + ", " + location.region}
                />
              </h2>
              <h3>
                <BadgePill labelValue={location.country} />
              </h3>
              <br />
              <h2>
                <BadgePill
                  label={"Feels Like:"}
                  labelValue={currentWeather.feelslike_f + "°F"}
                />
              </h2>
              <h2>
                <BadgePill
                  label={"Humidity:"}
                  labelValue={currentWeather.humidity + "%"}
                />
              </h2>
              <h2>
                <BadgePill
                  label={"Wind:"}
                  labelValue={
                    currentWeather.wind_dir +
                    " " +
                    currentWeather.wind_mph +
                    " mph"
                  }
                />
              </h2>
              <h2>
                {" "}
                <BadgePill labelValue={currentWeather.condition.text} />
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
