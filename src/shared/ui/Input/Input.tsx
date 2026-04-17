import clsx from "clsx";
import styles from "./Input.module.css";

interface Props {
	size?: string;
	name?: string;
	value?: string;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	marginTop?: string;
	placeholder?: string;
	disabled?: boolean;
}

const Input = ({
	size = "300",
	name,
	value,
	onChange,
	error = false,
	marginTop = "0",
	placeholder = "",
	disabled = false,
}: Props) => {
	return (
		<div
			style={{
				maxWidth: `${size}px`,
				width: "100%",
				marginTop: `${marginTop}px`,
			}}
			className={styles.inputWrapper}
		>
			<input
				value={value}
				onChange={onChange}
				name={name || ""}
				type="text"
				disabled={disabled}
				placeholder={placeholder}
				className={clsx(styles.input, { [styles.error]: error })}
			/>
		</div>
	);
};

export default Input;
