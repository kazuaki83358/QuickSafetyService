import { Hero } from './Hero';
import { Services } from './Services';
import { WhyChooseUs } from './WhyChooseUs';
import { Testimonials } from './Testimonials';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
