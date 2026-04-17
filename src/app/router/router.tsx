import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/ui/Home";
import { AuthLayout } from "../layouts/AuthLayout";
import RegistrationPage from "@/pages/auth/registration/RegistrationPage";
import MainLayout from "../layouts/MainLayout";
import { ProfileInfoPage } from "@/pages/profile/profileInfo";
import { EditProfilePage } from "@/pages/profile/editProfile";
import LoginPage from "@/pages/auth/login/ui/LoginPage";
import NotAuthRoute from "./NotAuthRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: (
					<NotAuthRoute>
						<Home />
					</NotAuthRoute>
				),
			},
			{
				path: "profile",
				children: [
					{
						index: true,
						element: (
							<NotAuthRoute>
								<ProfileInfoPage />
							</NotAuthRoute>
						),
					},
					{
						path: "edit",
						element: (
							<NotAuthRoute>
								<EditProfilePage />
							</NotAuthRoute>
						),
					},
				],
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register",
				element: <RegistrationPage />,
			},
		],
	},
]);
