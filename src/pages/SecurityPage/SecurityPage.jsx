import styles from "./SecurityPage.module.css";
import Shield from '../../assets/images/SecurityLogo.png'
import badge from '../../assets/icons/badge.png'
import patient from '../../assets/icons/patient.png'
import cloud from '../../assets/icons/cloud.png'
import audit from '../../assets/icons/audit.png'
import role from '../../assets/icons/role.png'
import { CiCircleCheck } from "react-icons/ci";
import Join from "../../components/Join/Join";

const features = [
  {
    title: "NDPR / NDPA Compliant Framework",
    text:
      "Built adhering to NDPR and NDPA regulations, applying strict data handling, storage, and sharing standards that protect patient privacy and support regulatory accountability.",
    color: "green",
    icon: badge
  },
  {
    title: "Role Based Access",
    text:
      "System access is granted strictly by role, ensuring clinicians, administrators, and staff only view information necessary for their responsibilities.",
    color: "purple",
    icon: role

  },
  {
    title: "Patient-Controlled Access",
    text:
      "Patients decide who can access their medical records and revoke permissions anytime, ensuring informed consent and confidence in how their health data is shared.",
    color: "blue",
    icon: patient
  },
  {
    title: "Audit Trails",
    text:
      "Every access to patient data is securely logged, recording who accessed it, and when, creating accountability and supporting compliance.",
    color: "orange",
    icon: audit
  },
  {
    title: "Secure Cloud Infrastructure",
    text:
      "Operating on a secure, scalable cloud infrastructure with backups and protections that safeguard medical data against loss, breaches, and service disruption.",
    color: "indigo",
    icon: cloud
  },
];

const SecurityPage = () => {
  return (
    <>
      {/* hero */}
      <section className={styles.hero}>
        <span className={styles.badge}>Security</span>
        <h1>
          Built with Security and
          <br />
          Privacy at the Core
        </h1>
      </section>

      {/* center visual */}
      <section className={styles.visual}>
        <div className={styles.circleWrap}>
          <img src={Shield} alt="Security shield" />

          <span className={`${styles.tag} ${styles.t1}`}>
          <CiCircleCheck size={12} color={"#84B27C"}/>  NDPR / NDPA Compliant
          </span>
          <span className={`${styles.tag} ${styles.t2}`}>
        <CiCircleCheck size={12} color={"#52489C"}/> Role Base Access
          </span>
          <span className={`${styles.tag} ${styles.t3}`}>
           <CiCircleCheck size={12} color={"#E8A94E"}/> Audit Trails
          </span>
          <span className={`${styles.tag} ${styles.t4}`}>
           <CiCircleCheck size={12} color={'#52489C'}/> Secure Cloud Infrastructure
          </span>
          <span className={`${styles.tag} ${styles.t5}`}>
           <CiCircleCheck color={'#7599B5'}size={12}/> Patient-Controlled Access
          </span>
        </div>
      </section>

      {/* features */}
      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <img src={f.icon} alt="icon" />
            {/* <span className={`${styles.icon} ${styles[f.color]}`} /> */}
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      {/* cta */}
      {/* <section className={styles.cta}>
        <h3>Join the Future of Connected Healthcare</h3>
        <p>
          Axonlink is building a secure healthcare network that empowers
          patients, supports clinicians, and strengthens healthcare systems.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Contact us</button>
        </div>
      </section> */}
      <section>
        <Join />
      </section>
    </>
  );
};

export default SecurityPage;
