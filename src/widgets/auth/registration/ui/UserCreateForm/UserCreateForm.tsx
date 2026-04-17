import {
	RegistrationForm,
	type RegistrationFormState,
} from "@/features/auth/registration";
import styles from "./UserCreateForm.module.css";
import LoginLabel from "../LoginLabel/LoginLabel";
import { FormProvider, useForm } from "react-hook-form";
import { SocialIconsList } from "@/shared/ui/SocialIconsList";

const UserCreateForm = () => {
	const methods = useForm<RegistrationFormState>({
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			agreePolicy: false,
			agreePolicyConfirm: false,
			newsletter: false,
		},
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.formWrapper}>
				<FormProvider {...methods}>
					<RegistrationForm />
				</FormProvider>
				<span className={styles.socialText}>
					Зарегистрироваться через социальные сети
				</span>
				<SocialIconsList />
			</div>
			<LoginLabel />
		</div>
	);
};

export default UserCreateForm;
