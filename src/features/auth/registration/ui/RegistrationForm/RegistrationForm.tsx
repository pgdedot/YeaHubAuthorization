
import { useFormContext, type SubmitHandler } from "react-hook-form";
import styles from "./RegistrationForm.module.css";
import { useRegisterMutation } from "@/entities/auth/api/authApi";
import { Checkbox } from "@/shared/ui/Checkbox";
import type { RegistrationFormState } from "../../model/types";
import { FormField } from "@/shared/ui/FormField";
import { Input } from "@/shared/ui/Input";
import { PasswordInput } from "@/shared/ui/PasswordInput";
import { Loader } from "@/shared/ui/Loader";
import { ErrorModal } from "@/shared/ui/ErrorModal";
import { useModal } from "@/shared/helpers/useModal";
import { getErrorMessage } from "@/shared/helpers/getErrorMessage";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

const RegistrationForm = () => {
	const { handleSubmit, control, getValues } =
		useFormContext<RegistrationFormState>();
	const [registerMutation, { isLoading, error, isError, isSuccess }] =
		useRegisterMutation();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<RegistrationFormState> = async (data) => {
		const { username, email, password } = data;
		const user = {
			username: username,
			email: email,
			password: password,
		};
		await registerMutation(user);
	};

	if (isSuccess) {
		navigate("/profile");
	}

	const { isOpen, handleClose } = useModal(isError);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<FormField
				name="username"
				label="Никнейм"
				control={control}
				rules={{
					required: "Это поле обязательно для заполнения",
				}}
				render={(fields) => (
					<Input size="408" placeholder="Введите никнейм" {...fields} />
				)}
			/>

			<FormField
				name="email"
				label="Электронная почта"
				control={control}
				rules={{
					required: "Это поле обязательно для заполнения",
					pattern: {
						value: /^\S+@\S+$/i,
						message: "Введите корректный email",
					},
				}}
				render={(fields) => (
					<Input
						size="408"
						placeholder="Введите электронную почту"
						{...fields}
					/>
				)}
			/>

			<FormField
				name="password"
				label="Пароль"
				control={control}
				rules={{
					required: "Это поле обязательно для заполнения",
				}}
				render={(fields) => (
					<PasswordInput
						id="password"
						placeholder="Введите пароль"
						{...fields}
					/>
				)}
			/>

			<FormField
				name="confirmPassword"
				label="Подтвердите пароль"
				control={control}
				rules={{
					required: "Это поле обязательно для заполнения",
					validate: (value) =>
						value === getValues("password") || "Пароли не совпадают",
				}}
				render={(fields) => (
					<PasswordInput
						id="confirmPassword"
						placeholder="Введите пароль"
						{...fields}
					/>
				)}
			/>

			<Button type="submit" variant="primary">
				Зарегистрироваться
			</Button>

			<p className={styles.agreeText}>
				Проставив галочку («✔») и нажимая «Зарегистрироваться»:
			</p>

			<FormField
				control={control}
				name="agreePolicy"
				rules={{
					required: "Вы должны согласиться с настоящими правилами и условиями",
				}}
				render={({ value, onChange }) => (
					<Checkbox
						value={value}
						name="agreePolicy"
						onChange={onChange}
						label={
							<>
								<span>
									Даю согласие на{" "}
									<span className={styles.selectedText}>обработку ПД</span>, в
									соответствии с
									<a className={styles.selectedText}>
										{" "}
										Политикой в отношении ПД
									</a>
								</span>
							</>
						}
					/>
				)}
			/>

			<FormField
				control={control}
				name="agreePolicyConfirm"
				rules={{
					required: "Вы должны согласиться с настоящими правилами и условиями",
				}}
				render={({ value, onChange }) => (
					<Checkbox
						value={value}
						name="agreePolicyConfirm"
						onChange={onChange}
						label="Я подтверждаю что ознакомился(-ась) с Договором-офертой"
					/>
				)}
			/>

			<FormField
				control={control}
				name="newsletter"
				render={({ value, onChange }) => (
					<Checkbox
						value={value}
						name="newsletter"
						onChange={onChange}
						label="Даю согласие на получение рекламных и информационных рассылок"
					/>
				)}
			/>
			<Loader showLoader={isLoading} />
			<ErrorModal
				isOpen={isOpen}
				onClose={handleClose}
				message={getErrorMessage(error)}
			/>
		</form>
	);
};

export default RegistrationForm;
