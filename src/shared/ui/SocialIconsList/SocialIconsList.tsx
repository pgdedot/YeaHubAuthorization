import styles from "./SocialIconsList.module.css";
import facebookIcon from "@/assets/facebook_5968764 1.png";
import telegramIcon from "@/assets/Telegram.png";
import googleIcon from "@/assets/google_300221 1.png";
import { SocialIcon } from "@/shared/ui/SocialIcon";

const SocialIconsList = () => {
	const images = [
		{ id: "facebook", src: facebookIcon, to: "https://www.facebook.com/" },
		{ id: "telegram", src: telegramIcon, to: "https://web.telegram.org/" },
		{ id: "google", src: googleIcon, to: "https://www.google.com/" },
	];

	return (
		<ul className={styles.iconsWrapper} id="registerOnSocial">
			{images.map((item) => (
				<li key={item.id} className={styles.listItem}>
					<SocialIcon srcTo={item.to} src={item.src} alt={item.id} />
				</li>
			))}
		</ul>
	);
};

export default SocialIconsList;
