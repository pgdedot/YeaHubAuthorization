import styles from "./UserInfo.module.css";
import type { FullProfile } from "@/entities/profile/model/types/types";
import { useGetSpecializationByIdQuery } from "@/entities/specialization/api/specializationApi";
import clsx from "clsx";

interface Props {
	profile: FullProfile;
}

const UserInfo = ({ profile }: Props) => {
	const { data } = useGetSpecializationByIdQuery(
		profile.activeProfile.specializationId,
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.usernameWrapper}>
				<p className={styles.username}>{profile.username}</p>
				<div className={styles.rateWrapper}>
					<p className={styles.rateText}>Кандидат</p>
				</div>
			</div>
			<p className={styles.text}>{data?.title}</p>
			<p className={clsx(styles.text, styles.dimText)}>{profile.email}</p>
		</div>
	);
};

export default UserInfo;
