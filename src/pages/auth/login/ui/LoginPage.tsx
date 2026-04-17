import styles from "./LoginPage.module.css";
import { LoginCreateForm } from "@/widgets/auth/login";
import { Button } from "@/shared/ui/Button";
import { useLogout } from "@/shared/helpers/useLogout";

const LoginPage = () => {
	const { handleLogout, accessToken } = useLogout();

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.textHeader}>Вход в личный кабинет</h1>
			{accessToken ? (
				<Button variant="primary" onClick={handleLogout}>
					Logout
				</Button>
			) : (
				<LoginCreateForm />
			)}
		</div>
	);
};

export default LoginPage;
