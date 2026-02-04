import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NavLinks = ({ open }) => {
  return (
    <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
      <Link to='/features'>Features</Link>
      <Link to='/solution'>Solution</Link>
      <Link to='/howitworks'>How it works</Link>
      <Link to='/security'>Security</Link>
      <Link to='/aboutus'>About us</Link>
      <Link to='/contact'>Contact</Link>
    </ul>
  );
};

export default NavLinks;
