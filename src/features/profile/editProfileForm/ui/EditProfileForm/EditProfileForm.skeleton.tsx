import { useLocation } from "react-router-dom";
import AboutMeTabFormSkeleton from "../AboutMeTabForm/AboutMeTabForm.skeleton";
import SkillsTabFormSkeleton from "../SkillsTabForm/SkillsTabForm.skeleton";
import PersonalInfoTabFormSkeleton from "../PersonalInfoTabForm/PersonalInfoTabForm.skeleton";
import styles from "./EditProfileForm.module.css";

const EditProfileFormSkeleton = () => {
	const location = useLocation();
	const currentTab = location.hash.replace("#", "");
	const tabs: Record<string, React.ReactNode> = {
		"about-me": <AboutMeTabFormSkeleton />,
		"skills": <SkillsTabFormSkeleton />,
		"personal-info": <PersonalInfoTabFormSkeleton />,
	};

	return (
		<div className={styles.formWrapper}>
			<div>
				<div className={`${styles.bone} ${styles.pageTitle}`} />
				<div className={styles.tabsWrapper}>
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className={`${styles.bone} ${styles.tabItem}`} />
					))}
				</div>
			</div>
			{tabs[currentTab] ?? <PersonalInfoTabFormSkeleton />}
		</div>
	);
};

export default EditProfileFormSkeleton;
