import BenefitItem from "../BenefitItem/BenefitItem";
import styles from './BenefitList.module.css'

const BenefitsList = () => {
	const benefitsItems: string[] = [
		"Пошаговый план обучения",
		"Карьерный рост",
		"Большое сообщество специалистов",
		"Обучение с ментором",
		"Возможность прохождения стажировки",
	];

	return (
    <ul className={styles.list}>
      {benefitsItems.map(item => (
        <BenefitItem text={item}/>
      ))}
    </ul>
  );
};

export default BenefitsList;
