import styles from './Footer.module.css';

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <p>© {new Date().getFullYear()} Axonlink. All rights reserved.</p>

      <div className={styles.footerPolicies}>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  );
};

export default FooterBottom;
