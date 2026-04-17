import styles from './AboutMeTabForm.module.css'

const AboutMeTabFormSkeleton = () => (
  <div className={styles.wrapper}>
    <div className={styles.textWrapper}>
      <div className={`${styles.bone} ${styles.title}`} />
      <div className={`${styles.bone} ${styles.descLine}`} />
      <div className={`${styles.bone} ${styles.descLine}`} />
      <div className={`${styles.bone} ${styles.descLineShort}`} />
    </div>
    <div className={styles.areaBox} />
  </div>
);

export default AboutMeTabFormSkeleton;
