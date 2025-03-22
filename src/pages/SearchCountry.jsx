// 📍 src/pages/SearchCountry.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByRegion } from "../service/countryApi";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";
import SearchForm from "../components/SearchForm/SearchForm";
import CountryList from "../components/CountryList/CountryList";
import styles from "./SearchCountry.module.css";

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("region");
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!region) return;

    const asyncWrapper = async () => {
      setLoading(true);
      try {
        const data = await fetchByRegion(region);
        console.log("✅ Країни з API:", data);
        setCountries(data);
      } catch (error) {
        console.error("❌ Помилка:", error.message);
      } finally {
        setLoading(false);
      }
    };

    asyncWrapper();
  }, [region]);

  const handleSearch = (region) => {
   setSearchParams({ region });
  };

  return (
    <Section  className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Search Country</h1>
        <SearchForm onSubmit={handleSearch} />
        {loading && <p className={styles.loading}>Завантаження...</p>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
