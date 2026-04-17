import { useLocation, useNavigate } from "react-router-dom";
import { tabs } from "../../model/constants";
import { FormProvider, useForm } from "react-hook-form";
import type { EditProfileFormValues } from "../../model/types/types";
import { useAppSelector } from "@/app/appStore";
import {
	TransformFormToProfile,
	TransformProfileToForm,
} from "../../lib/helper/TransformProfileForm";
import { useUpdateProfileMutation } from "../../api/editProfileApi";
import styles from "./EditProfileForm.module.css";
import { Loader } from "@/shared/ui/Loader";
import { useModal } from "@/shared/helpers/useModal";

import { Tabs } from "@/shared/ui/Tabs";
import { Button } from "@/shared/ui/Button";
import { ErrorModal } from "@/shared/ui/ErrorModal";

const EditProfileForm = () => {
	const { hash } = useLocation();
	const navigate = useNavigate();
	const [
		updateProfile,
		{ isLoading: isUpdatingProfile, isSuccess: isSuccessUpdate, isError },
	] = useUpdateProfileMutation();
	const { fullProfile } = useAppSelector((state) => state.profile);
	const methods = useForm<EditProfileFormValues>({
		defaultValues: fullProfile ? TransformProfileToForm(fullProfile) : {},
	});

	const { isOpen, handleClose } = useModal(isError);

	const activeTab = hash.replace("#", "") || "personal-info";

	const setActiveTab = (tab: string) => {
		navigate(`#${tab}`);
	};

	const onSubmit = (data: EditProfileFormValues) => {
		if (!fullProfile) return;
		updateProfile(TransformFormToProfile(data, fullProfile));
	};

	if (isSuccessUpdate) {
		navigate("/profile");
	}

	return (
		<div className={styles.formWrapper}>
			<div>
				<h3 className={styles.formTextHeader}>Редактирование профиля</h3>
				<Tabs tabs={tabs} activeTabId={activeTab} setActiveTab={setActiveTab} />
			</div>

			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
					{tabs.map(
						({ id, Component }) =>
							activeTab === id && Component && <Component key={id} />,
					)}
					<Button variant="primary" type="submit" disabled={isUpdatingProfile}>
						Сохранить
					</Button>
				</form>
			</FormProvider>

			<Loader showLoader={isUpdatingProfile} />
			<ErrorModal
				message="Не получилось обновить данные профиля"
				onClose={handleClose}
				isOpen={isOpen || !fullProfile}
			/>
		</div>
	);
};

export default EditProfileForm;
