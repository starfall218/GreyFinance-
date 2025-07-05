import React from 'react';
import GreyNavbar from './components/header';
import BankingHero from './components/section-1.jsx';
import PressSection from './components/PressSection.jsx';
import ImageGridSection from './components/ImageGridSection.jsx'; 
import Footer from './components/footer/Footer.jsx'; 
import { Globe } from 'lucide-react';   
import WithGrey from './components/withgrey.jsx';
import Umm from './components/hoverboxes.jsx';
import Twowomen from './components/SectionComponent.jsx';
import MoreThanBankingCarousel from './components/MoreThsnBankingCarousel.jsx';
import ProductQualityCarousel from './components/ProductQualityCarousel.jsx';
import TestimonialCarousel from './components/TestimonialCarousel.jsx';
const App = () => {
  return (
    <div>
      <GreyNavbar />
      <BankingHero />
      <PressSection />
      
      <ImageGridSection />
      <WithGrey />
      <Umm />
      <Twowomen />
      <MoreThanBankingCarousel />
      <ProductQualityCarousel />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default App;