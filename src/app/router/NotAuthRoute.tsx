import { getFromLS } from "@/shared/helpers/controlLocalStorage";
import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
	children: ReactNode;
}

const NotAuthRoute = ({ children }: Props) => {
	const isAuth = getFromLS("accessToken");

	return isAuth ? <>{children}</> : <Navigate to={"/auth/login"} />;
};

export default NotAuthRoute;
