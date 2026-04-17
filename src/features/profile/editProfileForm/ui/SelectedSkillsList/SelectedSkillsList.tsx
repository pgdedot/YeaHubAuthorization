import type { SelectedSkill } from "../../model/types/types";
import styles from "./SelectedSkillsList.module.css";
import { SkillItem } from "@/entities/skills";

interface Props {
	skills: SelectedSkill[];
	onRemove?: (id: number) => void;
	label?: string;
}

const SelectedSkillsList = ({ skills, onRemove, label }: Props) => {
	if (!skills.length) return null;

	const content = (
		<div className={styles.selectedList}>
			{skills.map(({ title, id, imageSrc }) => (
				<SkillItem
					img={imageSrc}
					deleteButton={!!onRemove || false}
					onRemove={() => onRemove?.(id)}
					title={title}
					key={id}
				/>
			))}
		</div>
	);

	if (label) {
		return (
			<div className={styles.selectedSection}>
				<p className={styles.selectLabel}>{label}</p>
				{content}
			</div>
		);
	}

	return <div className={styles.selectedSection}>{content}</div>;
};

export default SelectedSkillsList;
