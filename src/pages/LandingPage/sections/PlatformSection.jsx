import styles from '../LandingPage.module.css';

import card1 from '../../../assets/images/card1.png';
import card2 from '../../../assets/images/card2.png';
import card3 from '../../../assets/images/card3.png';
import card4 from '../../../assets/images/card4.png';

import cardMobile1 from '../../../assets/images/cardMobile1.png';
import cardMobile2 from '../../../assets/images/cardMobile2.png';
import cardMobile3 from '../../../assets/images/cardMobile3.png';
import cardMobile4 from '../../../assets/images/cardMobile4.png';

const PlatformSection = () => {
  return (
    <section className={styles.platformSection}>
      <div className={styles.platformContent}>
        <h2 className={styles.platformHeading}>
          One Secure Platform for Connected Healthcare
        </h2>
        <p className={styles.platformSubheading}>
          Axonlink unifies healthcare data in one secure platform, enabling
          easy record access, faster referrals, and coordinated care.
        </p>
      </div>

      <div className={styles.platformGridContainer}>
        <div className={styles.platformGrid}>
          <div className={styles.platformGridWide}>
            <h3>Seamless Referrals and Appointments</h3>
            <p>
              Referrals and appointments coordinated digitally for faster,
              smoother care.
            </p>

            <div className={styles.platformGridImage}>
              <img
                 src={card1}
                alt="Seamless Referrals and Appointments"
                className={styles.platformDesktopImg}
              />
              <img
                src={cardMobile1}
                alt="Seamless Referrals and Appointments"
                className={styles.platformMobileImg}
              />
            </div>
          </div>

          <div className={styles.platformGridTall}>
            <h3>Centralized Patient Medical Records</h3>
            <p>
              All patient medical records securely connected in one unified
              system.
            </p>

            <div className={styles.platformGridImage}>
              <img
                src={card4}
                alt="Centralized Patient Medical Records"
                className={styles.platformDesktopImg}
              />
              <img
                src={cardMobile2}
                alt="Centralized Patient Medical Records"
                className={styles.platformMobileImg}
              />
            </div>
          </div>

          <div className={styles.platformGridCard}>
            <h3>Built for Patients, Clinicians and Facilities</h3>
            <p>
              Designed for patients, clinicians, and healthcare facilities
              with tailored tools.
            </p>

            <div className={styles.platformGridImage}>
              <img
                src={card3}
                alt="Built for Patients, Clinicians and Facilities"
                className={styles.platformDesktopImg}
              />
              <img
                src={cardMobile3}
                alt="Built for Patients, Clinicians and Facilities"
                className={styles.platformMobileImg}
              />
            </div>
          </div>

          <div className={styles.platformGridCard}>
            <h3>Secure, Consent-based Data Access</h3>
            <p>
              Patient data is accessed only with explicit permission and
              control.
            </p>

            <div className={styles.platformGridImage}>
              <img
                src={card2}
                alt="Secure, Consent-based Data Access"
                className={styles.platformDesktopImg}
              />
              <img
                src={cardMobile4}
                alt="Secure, Consent-based Data Access"
                className={styles.platformMobileImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
