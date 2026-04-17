import { useAppSelector } from "@/app/appStore";
import styles from "./ProfileInfoPage.module.css";
import { InfoBlock } from "@/widgets/profile/InfoBlock";
import { SkillsBlock } from "@/widgets/profile/SkillsBlock";
import { UserBlock } from "@/widgets/profile/UserBlock";

const ProfileInfoPage = () => {
	const { fullProfile } = useAppSelector((state) => state.profile);

	return (
		<main className={styles.wrapper}>
			<UserBlock />
			<InfoBlock description={fullProfile?.activeProfile.description} />
			<SkillsBlock skillsList={fullProfile?.activeProfile.profileSkills} />
		</main>
	);
};

export default ProfileInfoPage;
