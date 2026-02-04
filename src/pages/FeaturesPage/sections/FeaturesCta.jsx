import styles from '../FeaturesPage.module.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FeaturesCta = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Join the Future of Connected Healthcare</h2>
        <p className={styles.ctaText}>
          Axonlink is building a secure healthcare network that empowers patients, 
          supports clinicians, and strengthens healthcare systems.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/get-started" className={styles.primaryButton}>
            <span>Get Started</span>
            <FiArrowUpRight />
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCta;