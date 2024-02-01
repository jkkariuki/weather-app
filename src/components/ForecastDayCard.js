import React, { useState, useEffect } from "react";

function ForecastDayCard(props) {
  const { forecast } = props;
  const [filteredForecast, setForecast] = useState([]);
  // console.log();
  // const [forecastHours, setforecastHours] = useState(forecast);

  // console.log(forecast);

  // console.log(hours);

  // const [hourly, setHourly] = useState();
  // let hours = [forecast[0], forecast[3], forecast[6], forecast[9]];

  // // console.log(forecast[0]);
  // useEffect(() => {
  //   let hours = [forecast[0], forecast[3], forecast[6], forecast[9]];
  //   setForecast(hours);
  // }, []);

  console.log(forecast);
  return (
    <div className="row">
      {forecast.map((hour) => {
        return (
          <div className="col-lg-3 col-md-3 col-sm-3 badge">
            <ul>
              <li>{hour.time.slice(10, 16)}</li>
              <li>
                <img src={hour.condition.icon}></img>
              </li>
              <li>{hour.temp_f}°F</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastDayCard;
