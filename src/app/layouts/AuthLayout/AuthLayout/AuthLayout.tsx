import { Outlet } from "react-router-dom";
import AuthAside from "../AuthAside/AuthAside";
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
	return (
		<div className={styles.container}>
			<AuthAside />
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
