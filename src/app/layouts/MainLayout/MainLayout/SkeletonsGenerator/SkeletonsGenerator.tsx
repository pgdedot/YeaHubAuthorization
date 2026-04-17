import EditProfileFormSkeleton from "@/features/profile/editProfileForm/ui/EditProfileForm/EditProfileForm.skeleton";
import { ProfileInfoPageSkeleton } from "@/pages/profile/profileInfo";
import { Loader } from "@/shared/ui/Loader";
import { useLocation } from "react-router-dom";

const SkeletonsGenerator = () => {
	const location = useLocation();
	switch (location.pathname) {
		case "/profile":
			return <ProfileInfoPageSkeleton />;
		case "/profile/edit":
			return <EditProfileFormSkeleton />;
		default:
			return <Loader />;
	}
};

export default SkeletonsGenerator;
