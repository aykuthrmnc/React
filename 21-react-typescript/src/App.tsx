import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    axios
      .get<CountryType[]>("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <Loading loading={loading}>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </Loading>
    </>
  );
};

export default App;
