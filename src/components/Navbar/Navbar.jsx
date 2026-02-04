import { useState } from 'react';
import styles from './Navbar.module.css';
import NavLinks from './NavLinks';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/' onClick={() => setOpen(false)}>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>

      <NavLinks open={open} onClick={() => setOpen(false)} />

      {/* CTA (merged – NavCTA removed) */}
      <div className={styles.cta}>
        <button className={styles.button}>
          <span className={styles.buttonText}>Get started</span>
          <FiArrowUpRight />
        </button>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label='Toggle navigation'>
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
