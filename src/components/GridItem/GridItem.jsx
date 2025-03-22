import style from './GridItem.module.css';
import { Link } from "react-router-dom";

const GridItem = ({ country }) => {
  return (
    <div className={style.item}>
      <Link to={`/country/${country.country}`} className={style.link}>
        <img
          src={country.flag}
          alt={`Прапор ${country.country}`}
          className={style.flag}
        />
        <p className={style.name}>{country.country}</p>
      </Link>
    </div>
  );
};

export default GridItem;
