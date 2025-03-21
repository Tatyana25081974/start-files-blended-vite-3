import axios from 'axios';
import { transformCountriesData, transformCountryData } from '../helpers/transformCountries';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';
// 🔹 Отримати інформацію про країну за name
export const getCountries = async () => {
  try { 
  const { data } = await axios.get('/region/europe');
  return transformCountriesData(data);
} catch (error) {
  console.error("❌ Помилка отримання країн Європи:", error);
  return [];
}
};
  


export const fetchCountry = async id => {
  try {
    const { data } = await axios.get(`/name/${id}`);
    return transformCountryData(data[0]); // Беремо перший елемент масиву
    const country = transformCountryData(data);
     } catch (error) {
    console.error(`❌ Помилка отримання даних про країну (${id}):`, error);
    return null;
  }
};

  

// 🔹 Отримати список країн за регіоном
export const fetchByRegion = async (region) => {
  try {
    const { data } = await axios.get(`/region/${region}`);
    return transformCountriesData(data);
  } catch (error) {
    console.error(`❌ Помилка отримання країн для регіону (${region}):`, error);
    return [];
  }
};
