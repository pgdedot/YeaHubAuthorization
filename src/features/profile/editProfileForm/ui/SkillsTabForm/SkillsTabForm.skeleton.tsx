import styles from "./SkillsTabForm.module.css";

const SkillsTabFormSkeleton = () => (
	<div className={styles.skillsFormWrapper}>
		<div className={styles.textWrapper}>
			<div className={`${styles.bone} ${styles.title}`} />
			<div className={`${styles.bone} ${styles.descLine}`} />
			<div className={`${styles.bone} ${styles.descLineShort}`} />
		</div>
		<div className={styles.controls}>
			<div className={styles.selectWrapper}>
				<div className={`${styles.bone} ${styles.label}`} />
				<div className={`${styles.bone} ${styles.select}`} />
			</div>
			<div className={styles.selectedList}>
				{[110, 90, 130, 100, 85].map((w, i) => (
					<div
						key={i}
						className={`${styles.bone} ${styles.pill}`}
						style={{ width: w }}
					/>
				))}
			</div>
		</div>
	</div>
);

export default SkillsTabFormSkeleton;
