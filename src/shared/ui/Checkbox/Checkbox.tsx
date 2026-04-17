import type { ReactNode } from "react";
import styles from "./Checkbox.module.css";

interface Props {
	label: ReactNode;
	value: boolean;
	onChange: () => void;
	name: string;
}

const Checkbox = ({ label, value, onChange, name }: Props) => {
	return (
		<label htmlFor={name} className={styles.checkboxWrapper}>
			<input
				type="checkbox"
				id={name}
				className={styles.checkbox}
				checked={value}
				onChange={onChange}
			/>

			<div className={styles.customCheckbox}>
				<span className={styles.checkmark}>✓</span>
			</div>

			{label}
		</label>
	);
};

export default Checkbox;
