import styles from './Sidebar.module.css'

const SidebarSkeleton = () => (
  <aside className={styles.container}>
    <div className={styles.asideHeader}>
      <div className={styles.skeletonLogo} />
      <div className={styles.skeletonLogoText} />
    </div>
    <div className={styles.navContainer}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={styles.skeletonMenuItem} />
      ))}
    </div>
  </aside>
);


export default SidebarSkeleton
