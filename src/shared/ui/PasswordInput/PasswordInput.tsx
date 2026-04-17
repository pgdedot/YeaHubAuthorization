import { useState, type ChangeEvent } from "react";
import styles from "./PasswordInput.module.css";
import clsx from "clsx";

interface Props {
	placeholder: string;
	id?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
}

const PasswordInput = ({ id, placeholder, value, onChange, error }: Props) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={styles.inputWrapper}>
				<input
					type={show ? "text" : "password"}
					className={clsx(styles.passwordInput, { [styles.error]: error })}
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				<button
					type="button"
					className={styles.eyeButton}
					onClick={() => setShow((prev) => !prev)}
				>
					{show ? "🙈" : "👁️"}
				</button>
			</div>
		</>
	);
};

export default PasswordInput;
