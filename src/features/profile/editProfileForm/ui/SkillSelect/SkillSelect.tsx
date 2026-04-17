import type { ProfileSkill } from "@/entities/auth";
import styles from "./SkillSelect.module.css";

interface Props {
	skills: ProfileSkill[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SkillSelect = ({ skills, onChange }: Props) => {
	return (
		<select id="skills" onChange={onChange} className={styles.selectSkill}>
			<option value="">Выбери навык</option>
			{skills.map((s) => (
				<option key={s.id} value={s.id}>
					{s.title}
				</option>
			))}
		</select>
	);
};

export default SkillSelect;
