import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TransformationSlider } from './components/TransformationSlider';
import { TeamSection } from './components/TeamSection';
import { YourVisitSection } from './components/YourVisitSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LookbookGallery } from './components/LookbookGallery';
import { FaqSection } from './components/FaqSection';
import { BookingAndContact } from './components/BookingAndContact';
import { Footer } from './components/Footer';
import { PROPOSED_SERVICE_GROUPS } from './data/salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    PROPOSED_SERVICE_GROUPS[0].title
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--color-primary-bg)] text-[var(--color-heading)]">
        <Navbar />
        <main>
          <Hero />
          <StudioIntro />
          <ServicesSection onSelectService={setSelectedService} />
          <WhyChooseSection />
          <TransformationSlider onSelectService={setSelectedService} />
          <TeamSection />
          <YourVisitSection />
          <ReviewsSection />
          <LookbookGallery />
          <FaqSection />
          <BookingAndContact preselectedService={selectedService} />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
