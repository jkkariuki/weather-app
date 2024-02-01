import React, { useState, useEffect } from "react";
import WeatherHero from "./components/WeatherHero";
import ForecastDayCard from "./components/ForecastDayCard";
import {
  currentLocationWeather,
  weatherSearch,
  getforecast,
} from "./apiCalls.js/getWeather";
import { CSSTransition } from "react-transition-group";

function App() {
  const [cityName, setCityName] = useState("");
  const [location, setLocation] = useState(undefined);
  const [forecast, setForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState();
  const [isEnter, setIsEnter] = useState(true);
  // const [hourly, setHourly] = useState([]);

  useEffect(() => {
    currentLocationWeather().then((res) => {
      console.log(res);
      setLocation(res.location);
      setCurrentWeather(res.current);
    });

    getforecast("south plainfield").then((res) => {
      console.log(res);
      let hourly = res.forecast.forecastday[0].hour;
      let response = [hourly[0], hourly[3], hourly[6], hourly[9]];
      setForecast(response);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsEnter((v) => !v);

    weatherSearch(cityName).then((res) => {
      console.log(res);
      setLocation(res.location);
      setCurrentWeather(res.current);
      setIsEnter((v) => !v);
    });

    getforecast(cityName).then((res) => {
      console.log(res);
      let hourly = res.forecast.forecastday[0].hour;
      let response = [hourly[0], hourly[3], hourly[6], hourly[9]];
      setForecast(response);
    });
  };

  return (
    <div className="App">
      <div className="row container formDiv">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control searchBar"
              placeholder="City, State, Zip Code..."
              name="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary searchButton">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="row container mainWeatherDiv">
        <CSSTransition
          in={isEnter}
          timeout={3000}
          appear={true}
          classNames="myClass"
          // nodeRef={nodeRef}
        >
          <WeatherHero
            location={location}
            currentWeather={currentWeather}
            isEnter={isEnter}
          />
        </CSSTransition>
        <CSSTransition
          in={isEnter}
          timeout={3000}
          appear={true}
          classNames="myClass"
          // nodeRef={nodeRef}
        >
          <ForecastDayCard forecast={forecast} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
