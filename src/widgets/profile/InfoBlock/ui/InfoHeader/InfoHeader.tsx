import { EditLink } from "@/shared/ui/EditLink";
import styles from "./InfoHeader.module.css";

const InfoHeader = () => {
	return (
		<div className={styles.headerWrapper}>
			<h4 className={styles.textHeader}>Обо мне</h4>
			<EditLink link="edit#about-me" />
		</div>
	);
};

export default InfoHeader;
