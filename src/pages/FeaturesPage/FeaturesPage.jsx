// src/pages/FeaturesPage/FeaturesPage.jsx
import styles from './FeaturesPage.module.css';

import FeaturesHero from './sections/FeaturesHero';
import FeaturesGrid from './sections/FeaturesGrid';
import DetailedFeatures from './sections/DetailedFeatures';
import FeaturesBenefits from './sections/FeaturesBenefits';
import FeaturesCta from './sections/FeaturesCta';

const FeaturesPage = () => {
  return (
    <main className={styles.body}>

      <FeaturesHero />
      <FeaturesGrid />
      <DetailedFeatures />
      <FeaturesBenefits />
      <FeaturesCta />

    </main>
  );
};

export default FeaturesPage;