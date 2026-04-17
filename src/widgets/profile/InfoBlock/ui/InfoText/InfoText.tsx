import styles from "./InfoText.module.css";

interface Props {
	description?: string;
}

const InfoText = ({ description }: Props) => {
	return (
		<div>
			<div className={styles.description}>{description || "Нет описания"}</div>
		</div>
	);
};

export default InfoText;
