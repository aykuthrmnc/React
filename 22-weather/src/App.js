import { useState, useEffect } from "react";
import axios from "axios";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language;

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Hava Durumu</h2>
      <HavaDurumu weather={weather} />
    </div>
  );
};

export default App;
