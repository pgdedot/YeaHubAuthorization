import styles from './PersonalInfoTabForm.module.css'

const PersonalInfoTabFormSkeleton = () => (
  <div className={styles.wrapper}>

    <div className={styles.avatarFormWrapper}>
      <div className={styles.sectionInfo}>
        <div className={`${styles.bone} ${styles.title}`} />
        <div className={`${styles.bone} ${styles.descLine}`} />
        <div className={`${styles.bone} ${styles.descLineShort}`} />
      </div>
      <div className={styles.avatarWrapper}>
        <div className={styles.imageWrapper}>
          <div className={`${styles.bone} ${styles.avatar}`} />
          <div className={`${styles.bone} ${styles.btn}`} />
        </div>
        <div className={`${styles.bone} ${styles.dropZone}`} />
      </div>
    </div>

    <div className={styles.personalInfoWrapper}>
      <div className={styles.textWrapper}>
        <div className={`${styles.bone} ${styles.title}`} />
        <div className={`${styles.bone} ${styles.descLine}`} />
        <div className={`${styles.bone} ${styles.descLineShort}`} />
      </div>
      <div className={styles.inputsWrapper}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.fieldWrapper}>
            <div className={`${styles.bone} ${styles.label}`} />
            <div className={`${styles.bone} ${styles.input}`} />
          </div>
        ))}
      </div>
    </div>

    <div className={styles.socialNetworkWrapper}>
      <div className={styles.textWrapper}>
        <div className={`${styles.bone} ${styles.title}`} />
        <div className={`${styles.bone} ${styles.descLine}`} />
        <div className={`${styles.bone} ${styles.descLineShort}`} />
      </div>
      <div className={styles.socialNetworks}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.fieldWrapper}>
            <div className={`${styles.bone} ${styles.label}`} />
            <div className={`${styles.bone} ${styles.input}`} />
          </div>
        ))}
      </div>
    </div>

  </div>
);

export default PersonalInfoTabFormSkeleton;