import styles from "./SkillsTabForm.module.css";
import { useSkillsForm } from "../../lib/hooks/useSkillsForm";
import SkillSelect from "../SkillSelect/SkillSelect";
import SkillsTabFormSkeleton from "./SkillsTabForm.skeleton";
import { useModal } from "@/shared/helpers/useModal";
import { ErrorModal } from "@/shared/ui/ErrorModal";
import SelectedSkillsList from "../SelectedSkillsList";

const SkillsTabForm = () => {
	const {
		availableSkills,
		isLoadingSkills,
		handleRemoveSkill,
		handleAddSkill,
		selectedSkills,
		isErrorSkills,
	} = useSkillsForm();

	const { isOpen, handleClose } = useModal(isErrorSkills);

	if (isLoadingSkills) return <SkillsTabFormSkeleton />;

	return (
		<div className={styles.skillsFormWrapper}>
			<div className={styles.textWrapper}>
				<p className={styles.formHeader}>Твои навыки</p>
				<p className={styles.formDescription}>
					Покажи что ты умеешь и в чём ты действительно хорошо
				</p>
			</div>
			<div className={styles.controls}>
				<div className={styles.selectWrapper}>
					<p className={styles.selectLabel}>Навык</p>
					<SkillSelect onChange={handleAddSkill} skills={availableSkills} />
				</div>

				<SelectedSkillsList
					onRemove={handleRemoveSkill}
					skills={selectedSkills}
				/>
			</div>
			<ErrorModal
				message="Не получилось загрузить навыки"
				onClose={handleClose}
				isOpen={isOpen}
			/>
		</div>
	);
};

export default SkillsTabForm;
