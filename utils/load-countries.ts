/* eslint-disable no-unused-vars */
// @ts-nocheck
import countries from '../data/countries.json';

export const loadCountries = (setCountries: (_countries: any) => void) => {
  setCountries(countries.features);
};
