import { useAppSelector } from "@/app/appStore";
import { useGetSkillsListQuery } from "@/entities/skills/api/skillsApi";
import { useFormContext } from "react-hook-form";
import type { SelectedSkill } from "../../model/types/types";

export const useSkillsForm = () => {
	const { fullProfile } = useAppSelector((state) => state.profile);
	const specialization = fullProfile?.activeProfile.specializationId || 0;

	const { watch, setValue } = useFormContext();
	const selectedSkills: SelectedSkill[] = watch("skills") ?? [];

	const params = specialization ? { specializations: [specialization] } : {};

	const {
		data: skills,
		isLoading: isLoadingSkills,
		isError: isErrorSkills,
	} = useGetSkillsListQuery(params);

	const availableSkills =
		skills?.data.filter(({ id }) => !selectedSkills.some((s) => s.id === id)) ??
		[];

	const handleAddSkill = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const id = Number(e.target.value);
		const skill = skills?.data.find((s) => s.id === id);
		if (skill && !selectedSkills.find((s) => s.id === skill.id)) {
			setValue("skills", [
				...selectedSkills,
				{ id: skill.id, title: skill.title, imageSrc: skill.imageSrc },
			]);
		}
		e.target.value = "";
	};

	const handleRemoveSkill = (skillId: number) => {
		setValue(
			"skills",
			selectedSkills.filter((s) => s.id !== skillId),
		);
	};

	return {
		availableSkills,
		isLoadingSkills,
		handleRemoveSkill,
		handleAddSkill,
		selectedSkills,
		isErrorSkills,
	};
};
