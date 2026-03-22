import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import SystemArchitecture from '@/components/SystemArchitecture';
import Experience from '@/components/Experience';
import CodingProfiles from '@/components/CodingProfiles';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

/**
 * Main Portfolio Page
 *
 * MODULARITY: Each section is a self-contained component.
 * To remove any section, simply comment out its import and JSX line.
 * No other changes needed — zero cross-section dependencies.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <SystemArchitecture />
      <Experience />
      <CodingProfiles />
      <Blog />
      <Contact />
    </main>
  );
}
