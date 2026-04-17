import { Link } from "react-router-dom";
import styles from "./LoginLabel.module.css";

const LoginLabel = () => {
	return (
		<div className={styles.registerWrapper}>
			<p className={styles.registerText}>Уже есть аккаунт?</p>
			<Link className={styles.registerLink} to={"/auth/login"}>
				Войти
			</Link>
		</div>
	);
};

export default LoginLabel;
