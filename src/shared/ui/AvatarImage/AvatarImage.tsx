import { DefaultAvatar } from "../DefaultAvatar";
import styles from "./AvatarImage.module.css";

interface AvatarProps {
	src?: string;
	alt?: string;
	size?: number;
}

const AvatarImage = ({
	src,
	alt = "profileAvatar",
	size = 200,
}: AvatarProps) => {
	if (src) {
		return (
			<img
				className={styles.avatarImg}
				src={src}
				alt={alt}
				width={size}
				height={size}
			/>
		);
	}

	return <DefaultAvatar width={size} height={size}/>;
};

export default AvatarImage;
