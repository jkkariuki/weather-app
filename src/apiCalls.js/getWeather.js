import React from "react";
import axios from "axios";

export const currentLocationWeather = async () => {
  let response;

  try {
    response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=south%plainfield&aqi=no`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const weatherSearch = async (cityName) => {
  let response;

  try {
    response = await axios.post(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&aqi=no`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getforecast = async (cityName) => {
  let response;
  let filteredForecast;

  try {
    response = await axios.post(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&aqi=no`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
