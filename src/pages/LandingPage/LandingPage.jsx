//import styles from './LandingPage.module.css';
import FaqSection from '../../components/FAQ/Faq.jsx';
import Join from '../../components/Join/Join.jsx'
import HeroSection from './sections/HeroSection';
import PlatformSection from './sections/PlatformSection';
import JourneySection from './sections/JourneySection';
import HowSection from './sections/HowSection';
import SecuritySection from './sections/SecuritySection';
import DataSection from './sections/DataSection';

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
      <Join/>
    </div>
  );
};

export default LandingPage;
