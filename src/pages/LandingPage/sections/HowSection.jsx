import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../LandingPage.module.css';
import HowItWorks from '../../../assets/images/HowItWorks.png';

const HowSection = () => {
  return (
    <section className={styles.howSection}>
      <div className={styles.howContent}>
        <h4 className={styles.howContentHeading}>How it Works</h4>
        <p className={styles.howContentText}>
          Securely store, access, and share medical records.
        </p>
        <button className={styles.getStartedButton}>
          <span className={styles.buttonText}>See How it Works</span>
          <FiArrowUpRight />
        </button>
      </div>

      <div className={styles.howImage}>
        <img src={HowItWorks} alt="" />
      </div>
    </section>
  );
};

export default HowSection;
