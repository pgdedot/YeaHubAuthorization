import styles from "./Textarea.module.css";

interface Props {
	value: string;
	onChange: () => void;
	maxLength: number;
}

const Textarea = ({ value, onChange, maxLength }: Props) => {
	return (
		<div className={styles.areaWrapper}>
			<textarea
				className={styles.area}
				id="aboutMe"
				maxLength={maxLength}
				onChange={onChange}
				value={value}
			/>
			<span className={styles.counter}>
				{value?.length}/{maxLength}
			</span>
		</div>
	);
};

export default Textarea;
