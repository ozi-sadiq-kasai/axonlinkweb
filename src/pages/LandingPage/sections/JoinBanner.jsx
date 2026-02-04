import styles from '../LandingPage.module.css';

const JoinBanner = () => {
  return (
    <section className={styles.joinBanner}>
      <h2 className={styles.joinTitle}>
        Join the Future of Connected Healthcare
      </h2>

      <p className={styles.joinText}>
        Axonlink is building a secure healthcare network that empowers
        patients, supports clinicians, and strengthens healthcare systems.
      </p>

      <div className={styles.joinButtons}>
        <button className={styles.joinPrimary}>
          Get Started <span>↗</span>
        </button>

        <button className={styles.joinSecondary}>Contact us</button>
      </div>
    </section>
  );
};

export default JoinBanner;
