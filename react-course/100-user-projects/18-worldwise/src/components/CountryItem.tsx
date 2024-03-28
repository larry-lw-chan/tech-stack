import styles from "./CountryItem.module.css";
import { Country } from "../Interfaces";

interface CountryItemProp {
  country: Country;
}

function CountryItem({ country }: CountryItemProp) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
