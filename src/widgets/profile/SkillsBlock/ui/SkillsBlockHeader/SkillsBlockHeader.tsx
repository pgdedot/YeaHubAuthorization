import { EditLink } from "@/shared/ui/EditLink";
import styles from "./SkillsBlockHeader.module.css";

const SkillsBlockHeader = () => {
	return (
		<div className={styles.headerWrapper}>
			<h4 className={styles.textHeader}>Навыки</h4>
			<EditLink link="edit#skills" />
		</div>
	);
};

export default SkillsBlockHeader;
