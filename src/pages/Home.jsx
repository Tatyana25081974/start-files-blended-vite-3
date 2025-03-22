import { useState, useEffect } from 'react';
import { getCountries } from '../service/countryApi';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from "../components/CountryList/CountryList"; // Додаємо список країн
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
    .then((data) => setCountries(data)) // Коли дані прийшли – записуємо у стан
    .catch((error) => console.error("❌ Помилка завантаження країн:", error)) // Якщо помилка – виводимо в консоль
    .finally(() => setLoading(false)); // Завжди вимикаємо стан завантаження
    
  }, []);
  
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <Link to="/search" className={styles.link}>🔎 Пошук країн за регіоном</Link>
        {loading && <p>Завантаження...</p>}
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
export default Home;
