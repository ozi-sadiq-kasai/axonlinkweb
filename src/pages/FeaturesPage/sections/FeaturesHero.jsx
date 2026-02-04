import styles from '../FeaturesPage.module.css';

const FeaturesHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          A Unified Digital Infrastructure for Healthcare Data and Referrals
        </h1>
        <p className={styles.heroSubtitle}>
          Axonlink provides a comprehensive platform that connects patient records, 
          referrals, appointments, and analytics in one secure system.
        </p>
      </div>
    </section>
  );
};

export default FeaturesHero;