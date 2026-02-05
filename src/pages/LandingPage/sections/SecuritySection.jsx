import { FiArrowUpRight } from 'react-icons/fi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import styles from '../LandingPage.module.css';

import security from '../../../assets/images/securityShield.png';

const SecuritySection = () => {
  return (
    <section className={styles.securitySection}>
      <div className={styles.securityImage}>
        <img src={security} alt="security placeholder" />
      </div>

      <div className={styles.securityContent}>
        <h4 className={styles.securityContentHeading}>
          Built with Security and Privacy at the Core
        </h4>

        <p className={styles.securityContentText}>
          Built with healthcare-grade security to ensure patient data remains
          protected at all times without slowing down care.
        </p>

        <ul>
          <li>
            <div className={styles.securityCheckMark}>
              <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
            </div>
            <p>Encrypted medical records</p>
          </li>

          <li>
            <div className={styles.securityCheckMark}>
              <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
            </div>
            <p>Role-based access control</p>
          </li>

          <li>
            <div className={styles.securityCheckMark}>
              <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
            </div>
            <p>Patient-consent-driven data sharing</p>
          </li>
        </ul>

        <button className={styles.securityButton}>
          <span className={styles.buttonText}>Learn About Security</span>
          <FiArrowUpRight />
        </button>
      </div>
    </section>
  );
};

export default SecuritySection;
