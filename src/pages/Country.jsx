import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountry } from "../service/countryApi";
import { fetchCountrySummary } from "../service/countryApi";
import styles from "./Country.module.css";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchCountry(id).then(setCountry).catch(console.error);
    fetchCountrySummary(id).then(setDescription).catch(console.error);
  }, [id]);

  if (!country) return <p>Завантаження...</p>;

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <div className={styles.wrapper}>
        <Heading title={country.countryName} tag="h2" top bottom />
        <img
          src={country.flag}
          alt={`Прапор ${country.countryName}`}
          className={styles.flag}
        />
        <p><strong>Сapital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> {country.languages.join(", ")}</p>
        {description && (
  <p className={styles.description}>{description}</p>
          )}
          </div>
      </Container>
    </Section>
  );
};

export default Country;

