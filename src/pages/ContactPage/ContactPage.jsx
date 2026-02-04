import { useState } from "react";
import styles from "./ContactPage.module.css";
import { FiArrowUpRight } from "react-icons/fi";

const ContactPage = () => {
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const submit = (e) => {
    e.preventDefault();

    // simulate api
    const ok = Math.random() > 0.5;
    setStatus(ok ? "success" : "error");
  };

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.badge}>Contact</span>
        <h1>
          Let’s Start the
          <br />
          <span>Conversation</span>
        </h1>
      </section>

      <section className={styles.wrapper}>
        {/* left */}
        <div className={styles.info}>
          <h3>Get In Touch With Us</h3>
          <p>
            Reach out to ask questions, get support, or explore how the platform
            supports secure, connected care.
          </p>

          <div className={styles.contactCard}>
            <div>
              <strong>Email:</strong>
              <span>axonlink@axonlink.ai</span>
            </div>
            <div>
              <strong>Phone:</strong>
              <span>+234 810 0044 000</span>
            </div>

            <span className={styles.availability}>
              Available Monday to Friday 9AM – 6PM WAT
            </span>
          </div>

          <div className={styles.social}>
            <span>Send a DM Via Social Media</span>

            <div className={styles.icons}>
              <div>f</div>
              <div>in</div>
              <div>ig</div>
              <div>x</div>
            </div>
          </div>
        </div>

        {/* right */}
        <form className={styles.form} onSubmit={submit}>
          <h4>Send Us a Message</h4>

          <div className={styles.row}>
            <div>
              <label>Contact Purpose</label>
              <select required>
                <option>Select Contact Reason</option>
              </select>
            </div>

            <div>
              <label>Role</label>
              <select required>
                <option>Role</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label>Full Name</label>
              <input placeholder="Enter Your Name" required />
            </div>

            <div>
              <label>Email Address</label>
              <input placeholder="Enter Your Email" required />
            </div>
          </div>

          <div>
            <label>Message</label>
            <textarea placeholder="Enter Your Message" rows="5" required />
          </div>

          <button className={styles.submit}>
            Send Message <FiArrowUpRight />
          </button>
        </form>
      </section>

      {/* banner */}
      <section className={styles.banner}>
        <div>
          <h3>Let’s Build Better Care Together</h3>
          <p>
            Our team is here to help clinicians and healthcare organizations get
            started and succeed.
          </p>
        </div>
      </section>

      {/* modals */}
      {status && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div
              className={`${styles.icon} ${
                status === "success" ? styles.ok : styles.err
              }`}
            >
              {status === "success" ? "✓" : "!"}
            </div>

            <h4>
              {status === "success"
                ? "Message Sent Successfully"
                : "Message Not Sent"}
            </h4>

            <p>
              {status === "success"
                ? "Thank you for reaching out. Your message has been received, and our team will review it and get back to you shortly."
                : "Something went wrong while sending your message. Please try again. If the issue persists, contact us via social media."}
            </p>

            <button onClick={() => setStatus(null)}>
              {status === "success" ? "Done" : "Try Again"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
