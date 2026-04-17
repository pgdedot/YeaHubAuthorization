import { useAppSelector } from "@/app/appStore";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./UserBlock.module.css";
import { AvatarImage } from "@/shared/ui/AvatarImage";
import { EditLink } from "@/shared/ui/EditLink";

const UserBlock = () => {
	const { fullProfile } = useAppSelector((state) => state.profile);

	return (
		<div className={styles.userBlockWrapper}>
			<AvatarImage src={fullProfile?.avatarUrl} />
			{fullProfile && <UserInfo profile={fullProfile} />}
			<div className={styles.editLinkWrapper}>
				<EditLink link="edit#personal-info" />
			</div>
		</div>
	);
};

export default UserBlock;
