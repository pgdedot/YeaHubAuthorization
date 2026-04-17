import PersonalInfoAvatarField from "../PersonalInfoAvatarField/PersonalInfoAvatarField";
import PersonalInfoField from "../PersonalInfoField/PersonalInfoField";
import PersonalInfoSocialField from "../PersonalInfoSocialField/PersonalInfoSocialField";
import styles from "./PersonalInfoTabForm.module.css";

const PersonalInfoTabForm = () => {
	return (
		<div className={styles.wrapper}>
      <PersonalInfoAvatarField/>
      <PersonalInfoField/>
      <PersonalInfoSocialField/>
		</div>
	);
};

export default PersonalInfoTabForm;
