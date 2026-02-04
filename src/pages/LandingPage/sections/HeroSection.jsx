import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../LandingPage.module.css';
import Spiral from '../../../assets/images/spiral.png';

const HeroSection = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerContent}>
        <h1 className={styles.mainHeading}>
          A Universal{' '}
          <span className={styles.headingSpan}>Health Passport</span> and
          Referral Network
        </h1>

        <p className={styles.subHeading}>
          We connect patients, clinicians, and healthcare facilities through
          one secure system making medical records, referrals, and
          appointments seamless and accessible.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.getStartedButton}>
            <span className={styles.buttonText}>Get Started</span>
            <FiArrowUpRight />
          </button>

          <button className={styles.contactUsButton}>Contact us</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src={Spiral} alt="Spiral" />
        <div className={styles.imageFade} />
      </div>
    </section>
  );
};

export default HeroSection;
