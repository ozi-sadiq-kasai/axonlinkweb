import { useState } from 'react';
import styles from './Navbar.module.css';
import NavLinks from './NavLinks';
import NavCTA from './NavCTA';
import { FiMenu } from 'react-icons/fi';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        <FiMenu />
      </button>

      <NavLinks open={open} />

      <NavCTA />
    </nav>
  );
};

export default Navbar;
