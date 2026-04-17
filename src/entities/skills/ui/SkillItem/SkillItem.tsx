import styles from "./SkillItem.module.css";

interface Props {
	title: string;
	onRemove?: () => void;
	deleteButton: boolean;
	img?: string;
}

const SkillItem = ({ img, title, onRemove, deleteButton = false }: Props) => {
	return (
		<span className={styles.skillItem}>
			<div className={styles.content}>
				<img className={styles.image} src={img} alt="" />
				{title}
			</div>
			{deleteButton && (
				<button
					type="button"
					onClick={onRemove}
					className={styles.deleteSkillBtn}
				>
					x
				</button>
			)}
		</span>
	);
};

export default SkillItem;
