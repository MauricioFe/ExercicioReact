import React, { useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';


export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredPopulation, setFilteredPopulation] = useState(0);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      let allCountries = await res.json();
      allCountries = allCountries.map(({ name, numericCode, flag, population }) => {
        return {
          id: numericCode,
          name,
          filterName: name.toLowerCase(),
          flag,
          population
        };
      });;
      const filterPopulation = calculateTotalPopulationFrom(allCountries);
      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
      setFilteredPopulation(filterPopulation);
    };
    fetchCountries();



  }, []);
  const handleChangeFilter = (newFilter) => {

    setFilter(newFilter);

    const filterLowerCase = newFilter.toLowerCase();
    const filteredCountries = allCountries.filter(country => {
      return country.filterName.includes(filterLowerCase);
    })
    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries)
    setFilteredCountries(filteredCountries)
    setFilteredPopulation(filteredPopulation)
  }
  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);
    return totalPopulation;
  }

  return (
    <div className="container">
      <h1 className="center"> React Countries</h1>
      <Header filter={filter} totalPopulation={filteredPopulation} countryCount={filteredCountries.length} onChangeFilter={handleChangeFilter} />
      <Countries countries={filteredCountries} />
    </div>
  )
}


