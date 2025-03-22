 import { FiSearch } from 'react-icons/fi';
import { useState } from "react"; //Ми імпортуємо хук `useState`, щоб зберігати значення вибраного регіону локально (всередині форми).

import styles from "./SearchForm.module.css";


// const regions = [
//   { id: 'africa', value: 'africa', name: 'Africa' },
//   { id: 'america', value: 'america', name: 'America' },
//   { id: 'asia', value: 'asia', name: 'Asia' },
//   { id: 'europe', value: 'europe', name: 'Europe' },
//   { id: 'oceania', value: 'oceania', name: 'Oceania' },
// ];
const SearchForm = ({ onSubmit }) => {                                        //оголошення компонента SearchForm
                                                                              // Він приймає проп onSubmit — це функція, яку ми отримаємо з батьківського компонента (SearchCountry.jsx)
  const [region, setRegion] = useState("default");                             ////Створюємо стан `region`, де зберігатиметься вибраний варіант із `<select>`. Початкове значення — `"default"` (тобто нічого ще не вибрано)
  const [error, setError] = useState(""); // 👉 для повідомлення про помилку                             
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (region === "default") {
      setError("Будь ласка, оберіть регіон 🙏");
      return;
    }// не відправляємо, якщо регіон не обрано

      onSubmit(region); // передаємо обраний регіон наверх (у SearchCountry.jsx)
       setRegion("default");   // 🎯 скидаємо select до початкового стану
  };


return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        🔍
         <FiSearch size="16px" /> 
      </button>

      <select //select` — випадаючий список регіонів  
        className={`${styles.select} ${
            region !== "default" ? styles.selected : ""
          }`} // 🔆 підсвітка якщо вибрано
        name="region"
        required
        aria-label="select"
        value={region} //value={region}` — **звʼязує поле з локальним станом
        onChange={(e) => setRegion(e.target.value)}  //при зміні оновлює стан `region` (через `setRegion`)
      >
        <option disabled value="default"> 
          Select a region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default SearchForm;


