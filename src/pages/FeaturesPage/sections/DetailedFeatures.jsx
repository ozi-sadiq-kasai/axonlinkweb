import styles from '../FeaturesPage.module.css';

const detailedFeatures = [
  {
    title: "Patient Medical Record Management",
    description: "We provide a centralized environment where patient medical records are created, updated, and maintained over time. Instead of patient data being scattered across multiple hospitals, files, and systems.",
    keyPoints: [
      "Patient identity and demographics",
      "Clinical summaries and visit records",
      "Diagnoses, treatments, and outcomes"
    ]
  },
  {
    title: "Referrals Between Facilities",
    description: "Initiate referrals directly from a patient's record, ensuring that the receiving facility has the necessary medical information before the patient arrives. Referral status can also be tracked from initiation to completion.",
    keyPoints: [
      "Digital referral creation",
      "Secure sharing of patient context",
      "Referral status tracking"
    ]
  },
  // Add other features similarly...
];

const DetailedFeatures = () => {
  return (
    <section className={styles.detailedFeaturesSection}>
      <div className={styles.container}>
        {detailedFeatures.map((feature, index) => (
          <div key={index} className={styles.detailedFeature}>
            <div className={styles.featureHeader}>
              <h2 className={styles.featureMainTitle}>{feature.title}</h2>
              <p className={styles.featureMainDescription}>{feature.description}</p>
            </div>
            
            <div className={styles.keyPoints}>
              <h4 className={styles.keyPointsTitle}>Key Coverage Includes</h4>
              <ul className={styles.keyPointsList}>
                {feature.keyPoints.map((point, idx) => (
                  <li key={idx} className={styles.keyPointItem}>
                    <span className={styles.bullet}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {index < detailedFeatures.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedFeatures;