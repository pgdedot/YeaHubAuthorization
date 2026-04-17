import { AppLogo } from "@/shared/ui/AppLogo";
import styles from "./AuthAside.module.css";
import BenefitsList from "../BenefitsList/BenefitsList";
import logo from "@/assets/logo.png";

const AuthAside = () => {
	return (
		<aside className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div>
					<AppLogo height="45px" width="45px" navigateTo={"/"} logoSrc={logo} />
					<p className={styles.text}>YeaHub объединяет IT-специалистов</p>
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.textHeader}>
						Стань частью сообщества YeaHub и получи:
					</h4>
					<BenefitsList />
				</div>
			</div>
		</aside>
	);
};

export default AuthAside;
