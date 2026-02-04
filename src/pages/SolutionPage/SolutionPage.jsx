import Banner from '../../assets/placeholder/PageBanner.png';
import styles from './SolutionPage.module.css';

const data = [
  {
    id: 'patients',
    tag: 'Mobile App',
    title: 'For Patients',
    text: 'We give patients greater control and visibility over their entire healthcare journey by bringing their medical information into one connected system. Patients can access their records, track appointments and referrals, and manage who has access to their data.',
    points: [
      'Ownership of health information',
      'Less repetition and paperwork',
      'More coordinated care',
    ],
    cta: 'Get Started as Patients',
    image: '/images/patients.png',
    reverse: false,
  },
  {
    id: 'clinicians',
    tag: 'Web, Mobile & Desktop',
    title: 'For Clinicians',
    text: 'Providing complete patient information and more efficient clinical workflows. With easy access to medical histories, referral information and appointment details.',
    points: [
      'Faster access to patient history',
      'Simplified referrals and scheduling',
      'Better-informed clinical decisions',
    ],
    cta: 'Get Started as Clinician',
    image: '/images/clinicians.png',
    reverse: true,
  },
  {
    id: 'facilities',
    tag: 'Desktop',
    title: 'For Healthcare Facilities',
    text: 'We improve operational efficiency and oversight for healthcare facilities by centralizing patient data, referrals and scheduling activities.',
    points: [
      'Improved coordination across departments',
      'Better resource utilization',
      'Stronger data governance',
    ],
    cta: 'Get Started as Facility',
    image: '/images/facilities.png',
    reverse: false,
  },
];

const SolutionPage = () => {
  return (
    <>
      <div>
        <img src={Banner} alt='' />
      </div>
      <section className={styles.wrapper}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.block} ${item.reverse ? styles.reverse : ''}`}>
            {/* text side */}
            <div className={styles.content}>
              <span className={styles.tag}>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ul>
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <button className={styles.cta}>{item.cta}</button>
            </div>

            {/* image side */}
            <div className={styles.imageWrap}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
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
    </>
  );
};

export default SolutionPage;
