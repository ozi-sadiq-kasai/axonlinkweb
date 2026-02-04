import { useState } from "react";
import styles from "./HowItWorksPage.module.css";

const DATA = {
  patient: {
    title: "For Patients",
    text:
      "Understand how you create, manage, and control your medical records across healthcare providers.",
    color: "purple",
    steps: [
      {
        id: "01",
        title: "Sign Up and Verify Account",
        text:
          "Register using your email or phone number, and complete your verification.",
      },
      {
        id: "02",
        title: "Add Medical Records",
        text:
          "Add information from hospitals / clinics, bringing your health information together.",
      },
      {
        id: "03",
        title: "Control Who Accesses Your Data",
        text:
          "Choose who can view your records and manage access anytime.",
      },
      {
        id: "04",
        title: "Track Appointments & Referrals",
        text:
          "View appointments, receive reminders and track referrals in one place.",
      },
      {
        id: "05",
        title: "Carry Your History Anywhere",
        text:
          "Your medical history follows you across facilities with no repeated paperwork.",
      },
    ],
  },

  clinician: {
    title: "For Clinicians",
    text:
      "Understand how you create, manage, and control patient medical records across healthcare providers.",
    color: "green",
    steps: [
      {
        id: "01",
        title: "Register and Verify License",
        text:
          "Set up your professional profile and verify your license.",
      },
      {
        id: "02",
        title: "Access Patient Records",
        text:
          "Access patient histories and full clinical context before consultations.",
      },
      {
        id: "03",
        title: "Create & Manage Medical Records",
        text:
          "Document visits, diagnoses and treatments securely.",
      },
      {
        id: "04",
        title: "Send & Receive Referrals",
        text:
          "Send and receive digital referrals with relevant clinical context.",
      },
      {
        id: "05",
        title: "Schedule Appointments",
        text:
          "Create and manage patient appointments easily.",
      },
    ],
  },

  facility: {
    title: "For Healthcare Facility",
    text:
      "Understand how you create, manage, and control patient medical records across healthcare providers.",
    color: "blue",
    steps: [
      {
        id: "01",
        title: "Register Hospital or Clinic",
        text:
          "Register your healthcare facility and set up your organization profile.",
      },
      {
        id: "02",
        title: "Verify Your License",
        text:
          "Confirm legitimacy and ensure secure participation in the network.",
      },
      {
        id: "03",
        title: "Manage Staff & Roles",
        text:
          "Add clinicians and staff, assign roles and permissions.",
      },
      {
        id: "04",
        title: "Centralize Patient Records",
        text:
          "Manage patient records in one connected system.",
      },
      {
        id: "05",
        title: "Manage Appointments & Referrals",
        text:
          "Oversee appointments and referrals across your facility.",
      },
    ],
  },
};

const HowItWorks = () => {
  const [active, setActive] = useState("patient");

  const block = DATA[active];

  return (
    <>
      {/* hero */}
      <section className={styles.hero}>
        <span className={styles.badge}>How It Works</span>
        <h1>
          Built for the Entire <span>Healthcare</span>
          <br />
          Health Journey
        </h1>
      </section>

      {/* tabs */}
      <div className={styles.tabsWrap}>
        <div className={styles.tabs}>
          <button
            className={active === "patient" ? styles.activeTab : ""}
            onClick={() => setActive("patient")}
          >
            Patient
          </button>
          <button
            className={active === "clinician" ? styles.activeTab : ""}
            onClick={() => setActive("clinician")}
          >
            Clinicians
          </button>
          <button
            className={active === "facility" ? styles.activeTab : ""}
            onClick={() => setActive("facility")}
          >
            Healthcare Facility
          </button>
        </div>
      </div>

      {/* main block */}
      <section className={styles.section}>
        <div className={styles.intro}>
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </div>

        <div
          className={`${styles.steps} ${styles[block.color]}`}
        >
          {block.steps.map((s) => (
            <div key={s.id} className={styles.stepCard}>
              <span className={styles.stepNo}>{s.id}</span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className={styles.cta}>
        <h3>Join the Future of Connected Healthcare</h3>
        <p>
          Axonlink is building a secure healthcare network that empowers
          patients, supports clinicians, and strengthens healthcare systems.
        </p>

        <div className={styles.ctaBtns}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Contact us</button>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
