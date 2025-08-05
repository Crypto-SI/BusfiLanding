import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Challenge } from '@/components/landing/challenge';
import { Solution } from '@/components/landing/solution';
import { HowItWorks } from '@/components/landing/how-it-works';
import { KeyFeatures } from '@/components/landing/key-features';
import { Roadmap } from '@/components/landing/roadmap';
import { Join } from '@/components/landing/join';
import { Faq } from '@/components/landing/faq';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenge />
        <Solution />
        <HowItWorks />
        <KeyFeatures />
        <Roadmap />
        <Join />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
