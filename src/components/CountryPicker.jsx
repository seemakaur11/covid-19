
import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from '../components/CountryPicker.css';
import { fetchCountries } from "./Index";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <div style={{ marginLeft: '500px', marginTop: '30px'}}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {!!fetchedCountries && fetchedCountries.map((country, key) => (
          <option key={key} value={country}>{country}</option>))}
      </NativeSelect>
      </div>
    </FormControl>
  );
};
export default CountryPicker;
