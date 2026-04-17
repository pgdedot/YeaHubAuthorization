import { NavLink } from "react-router-dom";
import styles from "./AppLogo.module.css";

interface Props {
	navigateTo: string;
	textClassName?: string;
	logoSrc: string;
	width: string;
	height: string;
}

const AppLogo = ({
	navigateTo,
	textClassName,
	logoSrc,
	width,
	height,
}: Props) => {
	return (
		<NavLink to={navigateTo} className={styles.link}>
			<img
				src={logoSrc}
				alt="YeaHub Logo"
				className={styles.logo}
				style={{ width: width, height: height }}
			/>
			<p className={`${styles.text} ${styles[textClassName] ?? ""}`}>YeaHub</p>
		</NavLink>
	);
};

export default AppLogo;
