import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksPage.module.css";
import Join from '../../components/Join/Join'

const DATA = {
  patient: {
    key: "patient",
    title: "For Patients",
    text:
      "Understand how you create, manage, and control your medical records across healthcare providers.",
    color: "purple",
    steps: [
      { id: "01", title: "Sign Up and Verify Account", text: "Register using your email or phone number, and complete your verification." },
      { id: "02", title: "Add Medical Records", text: "Add information from hospitals / clinics, bringing your health information together." },
      { id: "03", title: "Control Who Accesses Your Data", text: "Choose who can view your records and manage access anytime." },
      { id: "04", title: "Track Appointments & Referrals", text: "View appointments, receive reminders and track referrals in one place." },
      { id: "05", title: "Carry Your History Anywhere", text: "Your medical history follows you across facilities with no repeated paperwork." }
    ]
  },

  clinician: {
    key: "clinician",
    title: "For Clinicians",
    text:
      "Understand how you create, manage, and control patient medical records across healthcare providers.",
    color: "green",
    steps: [
      { id: "01", title: "Register and Verify License", text: "Set up your professional profile and verify your license." },
      { id: "02", title: "Access Patient Records", text: "Access patient histories and full clinical context before consultations." },
      { id: "03", title: "Create & Manage Medical Records", text: "Document visits, diagnoses and treatments securely." },
      { id: "04", title: "Send & Receive Referrals", text: "Send and receive digital referrals with relevant clinical context." },
      { id: "05", title: "Schedule Appointments", text: "Create and manage patient appointments easily." }
    ]
  },

  facility: {
    key: "facility",
    title: "For Healthcare Facility",
    text:
      "Understand how you create, manage, and control patient medical records across healthcare providers.",
    color: "blue",
    steps: [
      { id: "01", title: "Register Hospital or Clinic", text: "Register your healthcare facility and set up your organization profile." },
      { id: "02", title: "Verify Your License", text: "Confirm legitimacy and ensure secure participation in the network." },
      { id: "03", title: "Manage Staff & Roles", text: "Add clinicians and staff, assign roles and permissions." },
      { id: "04", title: "Centralize Patient Records", text: "Manage patient records in one connected system." },
      { id: "05", title: "Manage Appointments & Referrals", text: "Oversee appointments and referrals across your facility." }
    ]
  }
};

const ORDER = ["patient", "clinician", "facility"];

/* ---------------- hooks ---------------- */

function usePlayOnView(ref) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setPlay(true);
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return play;
}

/* ---------------- component ---------------- */

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("patient");

  const sectionRefs = {
    patient: useRef(null),
    clinician: useRef(null),
    facility: useRef(null)
  };

  /* update tab while scrolling */
  useEffect(() => {
    const observers = [];

    ORDER.forEach((key) => {
      const el = sectionRefs[key].current;
      if (!el) return;

      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActiveTab(key);
        },
        {
          rootMargin: "-40% 0px -40% 0px"
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (key) => {
    sectionRefs[key].current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

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

      {/* sticky tabs */}
      <div className={styles.tabsStickyWrap}>
        <div className={styles.tabs}>
          <button
            onClick={() => scrollTo("patient")}
            className={activeTab === "patient" ? styles.activeTab : ""}
          >
            Patient
          </button>

          <button
            onClick={() => scrollTo("clinician")}
            className={activeTab === "clinician" ? styles.activeTab : ""}
          >
            Clinicians
          </button>

          <button
            onClick={() => scrollTo("facility")}
            className={activeTab === "facility" ? styles.activeTab : ""}
          >
            Healthcare Facility
          </button>
        </div>
      </div>

      {ORDER.map((key) => (
        <HowBlock
          key={key}
          data={DATA[key]}
          sectionRef={sectionRefs[key]}
        />
      ))}

      {/* cta */}
     <Join/>
    </>
  );
}

/* ---------------- section block ---------------- */

function HowBlock({ data, sectionRef }) {
  const loopRef = useRef(null);
  const play = usePlayOnView(loopRef);

  const steps = [...data.steps, ...data.steps];

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.intro}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>

      <div
        ref={loopRef}
        className={`${styles.loopViewport} ${
          play ? styles.play : ""
        } ${styles[data.color]}`}
      >
        <div className={styles.rings} />

        <div className={styles.loopTrack}>
          {steps.map((s, i) => (
            <div
              key={`${data.key}-${i}`}
              className={styles.stepCard}
              style={{ "--i": i }}
            >
              <span className={styles.stepNo}>{s.id}</span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
