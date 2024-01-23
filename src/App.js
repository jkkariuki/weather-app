import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherHero from "./components/WeatherHero";
import ForecastDayCard from "./components/ForecastDayCard";
import axios from "axios";

function App() {
  const [cityName, setCityName] = useState("");
  const [region, setRegion] = useState("NJ");
  const [country, setCountry] = useState("United States");
  const [temperature, setTemperature] = useState(25);
  const [weatherDescription, setWeatherDescription] = useState("ICY ASL");
  const [iconImg, setIconImg] = useState(
    "//cdn.weatherapi.com/weather/64x64/night/113.png"
  );

  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState();
  const [currentCity, setCurrentCity] = useState("");
  const [isEnter, setIsEnter] = useState(true);

  useEffect(() => {
    const getLocalWeather = async () => {
      let response;
      try {
        response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=south%plainfield&aqi=no`
        );
        setLocation(response.data.location);
        setCurrentWeather(response.data.current);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getLocalWeather();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await axios
    //   .post(
    //     `https://api.openweathermap.org/data/2.5/forecast?q=south%plainfield&appid=${process.env.REACT_APP_WEATHER_API}`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setCurrentCity(response.data.city.name);
    //     setForecast(response.data.list);
    //   });

    setIsEnter((v) => !v);

    const weatherNow = await axios
      .post(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${cityName}&aqi=no`
      )

      .then((res) => {
        setLocation(res.data.location);
        setCurrentWeather(res.data.current);
        setIsEnter((v) => !v);
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

      <WeatherHero
        location={location}
        currentWeather={currentWeather}
        isEnter={isEnter}
        // temperature={temperature}
        // currentCity={currentCity}
        // country={country}
        // weatherDescription={weatherDescription}
        // iconImg={iconImg}
      />
      <ForecastDayCard />
    </div>
  );
}

export default App;
