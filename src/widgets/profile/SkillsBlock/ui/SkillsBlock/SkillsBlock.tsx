import type { ProfileSkill } from "@/entities/auth";
import styles from "./SkillsBlock.module.css";
import SkillsBlockHeader from "../SkillsBlockHeader/SkillsBlockHeader";
import { SelectedSkillsList } from "@/features/profile/editProfileForm";



interface Props {
	skillsList?: ProfileSkill[];
}

const SkillsBlock = ({ skillsList }: Props) => {
	return (
		<div className={styles.wrapper}>
			<SkillsBlockHeader />
			{skillsList?.length ? (
				<SelectedSkillsList skills={skillsList} />
			) : (
				<div>Не выбраны навыки</div>
			)}
		</div>
	);
};

export default SkillsBlock;
