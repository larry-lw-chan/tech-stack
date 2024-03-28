import { ICity, ICountry } from "../Interfaces";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

interface CountryListProps {
  cities: ICity[];
  isLoading: boolean;
}

function CountryList({ cities, isLoading }: CountryListProps) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="add your first city by clicking a city on the map" />
    );

  const countries: ICountry[] = cities.reduce(
    (countryList: ICountry[], city: ICity) => {
      if (
        // Add new country if current country list does not contain the city country
        !countryList.map((country) => country.country).includes(city.country)
      ) {
        return [...countryList, { country: city.country, emoji: city.emoji }];
      } else {
        return countryList;
      }
    },
    []
  );

  return (
    <ul className={styles.countryList}>
      {countries.map((country: ICountry) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
