import styles from '../FeaturesPage.module.css';
import { FiCheckCircle } from 'react-icons/fi';

const benefits = [
  "Reduced administrative burden",
  "Improved patient outcomes",
  "Enhanced data security",
  "Better care coordination",
  "Increased operational efficiency",
  "Compliance with healthcare standards"
];

const FeaturesBenefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.benefitsTitle}>Benefits for Your Healthcare Organization</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;