// src/pages/FeaturesPage/FeaturesPage.jsx
import styles from './FeaturesPage.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import FeaturesHero from './sections/FeaturesHero';
import FeaturesGrid from './sections/FeaturesGrid';
import DetailedFeatures from './sections/DetailedFeatures';
import FeaturesBenefits from './sections/FeaturesBenefits';
import FeaturesCta from './sections/FeaturesCta';

const FeaturesPage = () => {
  return (
    <main className={styles.body}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      <FeaturesHero />
      <FeaturesGrid />
      <DetailedFeatures />
      <FeaturesBenefits />
      <FeaturesCta />

      <Footer />
    </main>
  );
};

export default FeaturesPage;