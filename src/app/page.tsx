import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsMatrix from '@/components/SkillsMatrix';
import ProjectShowcase from '@/components/ProjectShowcase';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  return (
    <main className="relative bg-[#0A192F] text-[#E6F1FF] overflow-x-hidden">
      <section className="relative h-screen">
        <Hero />
      </section>
      
      <section className="relative">
        <div className="section-padding">
          <About />
        </div>
        <div className="section-padding">
          <SkillsMatrix />
        </div>
        <div className="section-padding">
          <ProjectShowcase />
        </div>
        <div className="section-padding">
          <Certifications />
        </div>
        <div className="section-padding">
          <Contact />
        </div>
      </section>
      
      <AIAssistant />
    </main>
  );
}
