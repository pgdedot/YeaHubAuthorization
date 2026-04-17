import { LoginForm, type LoginFormState } from "@/features/auth/login";
import styles from "./LoginCreateForm.module.css";
import RegistrationLabel from "../RegistrationLabel/RegistrationLabel";
import { FormProvider, useForm } from "react-hook-form";
import { SocialIconsList } from "@/shared/ui/SocialIconsList";

const LoginCreateForm = () => {
	const methods = useForm<LoginFormState>();

	return (
		<div className={styles.formWrapper}>
			<div className={styles.formSocialWrapper}>
				<FormProvider {...methods}>
					<LoginForm />
				</FormProvider>

				<span className={styles.socialText}>
					Зарегистрироваться через социальные сети
				</span>
				<SocialIconsList />
			</div>

			<RegistrationLabel />
		</div>
	);
};

export default LoginCreateForm;
