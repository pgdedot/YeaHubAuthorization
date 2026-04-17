import { useLogout } from "@/shared/helpers/useLogout";
import styles from "./RegistrationPage.module.css";
import { UserCreateForm } from "@/widgets/auth/registration";
import { Button } from "@/shared/ui/Button";

const RegistrationPage = () => {
	const { handleLogout, accessToken } = useLogout();

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.textHeader}>Регистрация</h1>
			{accessToken ? (
				<Button variant="primary" onClick={handleLogout}>
					Logout
				</Button>
			) : (
				<UserCreateForm />
			)}
		</div>
	);
};

export default RegistrationPage;
