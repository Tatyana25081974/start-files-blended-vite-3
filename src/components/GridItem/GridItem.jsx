import style from './GridItem.module.css';
import { Link } from "react-router-dom";


const GridItem = ({ country }) => {
  return (
    <div className={style.item}>
      <Link to={`/country/${country.name}`}>
      <p>{country.name}</p>
      </Link>
    </div>
  )
};
export default GridItem;
