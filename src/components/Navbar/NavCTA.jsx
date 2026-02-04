import styles from './Navbar.module.css';
import { FiArrowUpRight } from 'react-icons/fi';

const NavCTA = () => {
  return (
    <div className={styles.cta}>
      <button className={styles.button}>
        <span className={styles.buttonText}>Get started</span>
        <FiArrowUpRight />
      </button>
    </div>
  );
};

export default NavCTA;
