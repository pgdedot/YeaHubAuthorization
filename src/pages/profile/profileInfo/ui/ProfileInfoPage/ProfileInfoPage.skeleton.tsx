import clsx from "clsx";
import styles from "./ProfileInfoPage.module.css";

const ProfileInfoPageSkeleton = () => (
	<main className={styles.wrapper}>
		<div className={styles.card}>
			<div className={clsx(styles.bone, styles.avatar)} />
			<div className={styles.userInfo}>
				<div className={clsx(styles.bone, styles.lineLg)} />
				<div className={clsx(styles.bone, styles.lineMd)} />
				<div className={clsx(styles.bone, styles.lineSm)} />
			</div>
			<div className={clsx(styles.bone, styles.btn)} />
		</div>

		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={clsx(styles.bone, styles.title)} />
				<div className={clsx(styles.bone, styles.btn)} />
			</div>
			<div className={styles.lines}>
				<div className={clsx(styles.bone, styles.lineFull)} />
				<div className={clsx(styles.bone, styles.lineWide)} />
				<div className={clsx(styles.bone, styles.lineMd)} />
			</div>
		</div>

		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={clsx(styles.bone, styles.title)} />
				<div className={clsx(styles.bone, styles.btn)} />
			</div>
			<div className={styles.pills}>
				{[110, 90, 130, 100, 85].map((w, i) => (
					<div
						key={i}
						className={clsx(styles.bone, styles.pill)}
						style={{ width: w }}
					/>
				))}
			</div>
		</div>
	</main>
);

export default ProfileInfoPageSkeleton;
