import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useProfileQuery } from "@/entities/auth/api/authApi";
import { Suspense } from "react";
import MainLayoutSkeleton from "./MainLayout.skeleton.tsx";
import { useModal } from "@/shared/helpers/useModal/useModal.ts";
import ErrorModal from "@/shared/ui/ErrorModal/ErrorModal.tsx";
import { Header } from "@/widgets/Header/index.ts";

const MainLayout = () => {
	const { isLoading, isError } = useProfileQuery();
	const { isOpen, handleClose } = useModal(isError);

	if (isLoading) return <MainLayoutSkeleton />;

	return (
		<Suspense fallback={<MainLayoutSkeleton />}>
			<section className={styles.container}>
				<Sidebar />
				<Header/>
				<main className={styles.mainContent}>
					<Outlet />
				</main>
				<ErrorModal
					isOpen={isOpen}
					onClose={handleClose}
					message="Не получилось загрузить данные профиля"
				/>
			</section>
		</Suspense>
	);
};

export default MainLayout;
