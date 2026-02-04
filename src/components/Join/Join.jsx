import React from 'react'
import styles from './Join.module.css'


const Join = () => {
  return (
     <section className={styles.cta}>
        <h3>Join the Future of Connected Healthcare</h3>
        <p>
          Axonlink is building a secure healthcare network that empowers
          patients, supports clinicians, and strengthens healthcare systems.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Contact us</button>
        </div>
      </section>
  )
}

export default Join