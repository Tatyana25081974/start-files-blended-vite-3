import axios from 'axios';
import { transformCountriesData, transformCountryData } from '../helpers/transformCountries';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';
// 🔹 Отримати інформацію про країну за name
export const getCountries = async () => {
  try { 
  const { data } = await axios.get('/region/europe');
  return transformCountriesData(data);
} catch (error) {
  console.error("❌ Помилка отримання країн :", error);
  return [];
}
};
  
export const fetchCountry = async id => {
  try {
    const { data } = await axios.get(`/name/${id}`);
    return transformCountryData(data[0]); 
    
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

export const fetchCountrySummary = async (name) => {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    );
    return response.data.extract; // це і є короткий опис
  } catch (error) {
    console.error("❌ Не вдалося отримати опис з Wikipedia:", error);
    return null;
  }
};
