import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import FaqSection from '../../components/FAQ/Faq.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import HeroSection from './sections/HeroSection';
import PlatformSection from './sections/PlatformSection';
import JourneySection from './sections/JourneySection';
import HowSection from './sections/HowSection';
import SecuritySection from './sections/SecuritySection';
import DataSection from './sections/DataSection';
import JoinBanner from './sections/JoinBanner';

const LandingPage = () => {
  return (
    <main className={styles.body}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      <HeroSection />
      <PlatformSection />
      <JourneySection />
      <HowSection />
      <SecuritySection />
      <DataSection />

      <FaqSection />

      <JoinBanner />

      <Footer />
    </main>
  );
};

export default LandingPage;
