import { useNavigate } from "react-router-dom";
import styles from "./GoBackBtn.module.css";

const GoBackBtn = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleGoBack} className={styles.button}>
      🔙 Назад
    </button>
  );
};

export default GoBackBtn;