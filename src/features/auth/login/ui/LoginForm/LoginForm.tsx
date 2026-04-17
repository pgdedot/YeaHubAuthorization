import { useLoginMutation } from "@/entities/auth/api/authApi";

import { useFormContext, type SubmitHandler } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import type { LoginFormState } from "../../model/types";
import { FormField } from "@/shared/ui/FormField";
import { Input } from "@/shared/ui/Input";
import { PasswordInput } from "@/shared/ui/PasswordInput";
import { Loader } from "@/shared/ui/Loader";
import { ErrorModal } from "@/shared/ui/ErrorModal";
import { useModal } from "@/shared/helpers/useModal";
import { getErrorMessage } from "@/shared/helpers/getErrorMessage";
import { Button } from "@/shared/ui/Button";

const LoginForm = () => {
	const { control, handleSubmit } = useFormContext<LoginFormState>();
	const [loginMutation, { isLoading, error, isError, isSuccess }] =
		useLoginMutation();
	const { isOpen, handleClose } = useModal(isError);
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<LoginFormState> = async (data) => {
		await loginMutation(data);
	};

	if (isSuccess) {
		navigate("/profile");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.inputWrapper}>
				<FormField
					name="username"
					control={control}
					label="Электронная почта"
					rules={{
						required: "Это поле обязательно для заполнения",
						pattern: {
							value: /^\S+@\S+$/i,
							message: "Введите корректный email",
						},
					}}
					render={({ value, onChange, error }) => (
						<Input
							placeholder="Введите электронную почту"
							value={value}
							onChange={onChange}
							size="408"
							error={error}
						/>
					)}
				/>
			</div>
			<div className={styles.inputWrapper}>
				<FormField
					name="password"
					label="Пароль"
					control={control}
					rules={{ required: "Это поле обязательно для заполнения" }}
					render={({ value, onChange, error }) => (
						<PasswordInput
							placeholder="Введите пароль"
							id="password"
							value={value}
							onChange={onChange}
							error={error}
						/>
					)}
				/>

				<div className={styles.linkWrapper}>
					<Link to={"/"}>Забыли пароль?</Link>
				</div>
			</div>

			<Button type="submit" style={{ marginTop: "40px" }} variant="primary">
				Вход
			</Button>
			<Loader showLoader={isLoading} />
			<ErrorModal
				isOpen={isOpen}
				onClose={handleClose}
				message={getErrorMessage(error)}
			/>
		</form>
	);
};

export default LoginForm;
