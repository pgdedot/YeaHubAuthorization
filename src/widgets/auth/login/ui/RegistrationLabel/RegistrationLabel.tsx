import { Link } from "react-router-dom";
import styles from "./RegistrationLabel.module.css";

const RegistrationLabel = () => {
	return (
		<div className={styles.registerWrapper}>
			<p className={styles.registerText}>Нет аккаунта?</p>
			<Link className={styles.registerLink} to={"/auth/register"}>
				Зарегистрироваться
			</Link>
		</div>
	);
};

export default RegistrationLabel;
