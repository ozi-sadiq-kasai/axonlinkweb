import styles from './Footer.module.css';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import FooterLogo from '../../assets/images/footerLogo.png'

const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <img src={FooterLogo} alt="Logo" className={styles.footerLogo} />
      <p className={styles.footerDesc}>
        Build, manage and scale your platform with confidence.
      </p>

      <div className={styles.footerSocials}>
        <a href="#"><FiFacebook /></a>
        <a href="#"><FiTwitter /></a>
        <a href="#"><FiLinkedin /></a>
      </div>
    </div>
  );
};

export default FooterBrand;
