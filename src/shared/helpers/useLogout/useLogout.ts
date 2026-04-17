import { useLazyLogoutQuery } from "@/entities/auth/api/authApi";
import { getFromLS } from "../controlLocalStorage";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
	const accessToken = getFromLS("accessToken");
	const [logoutUser] = useLazyLogoutQuery();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutUser();
		navigate("/auth/login");
	};

	return { accessToken, handleLogout };
};
