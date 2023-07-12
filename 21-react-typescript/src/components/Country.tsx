import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = ({ country }) => {
  return (
    <p>
      {country.translations.tur.official} - {country.capital}
    </p>
  );
};

export default Country;
