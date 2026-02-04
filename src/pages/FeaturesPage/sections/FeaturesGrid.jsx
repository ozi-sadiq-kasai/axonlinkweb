import styles from '../FeaturesPage.module.css';
import { 
  FiFileText, 
  FiShare2, 
  FiCalendar, 
  FiShield, 
  FiBarChart2, 
  FiClock 
} from 'react-icons/fi';

const featureCards = [
  {
    icon: <FiFileText />,
    title: "Patient Medical Record Management",
    description: "Centralized environment for creating, updating, and maintaining patient records",
    color: "#52489c"
  },
  {
    icon: <FiShare2 />,
    title: "Referrals Between Facilities",
    description: "Digital referral creation with secure patient context sharing",
    color: "#84b27c"
  },
  {
    icon: <FiCalendar />,
    title: "Appointments and Scheduling",
    description: "Digital appointment management with better care team coordination",
    color: "#4b3fa2"
  },
  {
    icon: <FiShield />,
    title: "Role-Based Access Control",
    description: "Enforced access control ensuring data privacy and security",
    color: "#91c488"
  },
  {
    icon: <FiBarChart2 />,
    title: "Report and Analysis",
    description: "Powerful analytics for patient care and performance insights",
    color: "#5b4fb2"
  },
  {
    icon: <FiClock />,
    title: "Medical History Continuity",
    description: "Continuous medical timeline across multiple care providers",
    color: "#6b5bb2"
  }
];

const FeaturesGrid = () => {
  return (
    <section className={styles.featuresGridSection}>
      <div className={styles.gridContainer}>
        <div className={styles.featuresGrid}>
          {featureCards.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div 
                className={styles.iconContainer}
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <span 
                  className={styles.icon}
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;