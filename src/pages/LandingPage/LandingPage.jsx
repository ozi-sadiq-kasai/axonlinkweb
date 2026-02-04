//import styles from './LandingPage.module.css';
import FaqSection from '../../components/FAQ/Faq.jsx';

import HeroSection from './sections/HeroSection';
import PlatformSection from './sections/PlatformSection';
import JourneySection from './sections/JourneySection';
import HowSection from './sections/HowSection';
import SecuritySection from './sections/SecuritySection';
import DataSection from './sections/DataSection';
import JoinBanner from './sections/JoinBanner';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <PlatformSection />
      <JourneySection />
      <HowSection />
      <SecuritySection />
      <DataSection />
      <FaqSection />
      <JoinBanner />
    </div>
  );
};

export default LandingPage;
