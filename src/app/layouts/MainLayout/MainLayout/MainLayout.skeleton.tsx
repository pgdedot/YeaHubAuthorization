import { SidebarSkeleton } from "@/widgets/Sidebar";
import styles from "./MainLayout.module.css";
import SkeletonsGenerator from "./SkeletonsGenerator/SkeletonsGenerator";

const MainLayoutSkeleton = () => {
	return (
		<section className={styles.container}>
			<SidebarSkeleton />

			<main className={styles.mainContent}>
				<SkeletonsGenerator />
			</main>
		</section>
	);
};

export default MainLayoutSkeleton;
