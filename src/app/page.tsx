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
      <div className="flex flex-col min-h-screen">
        <section className="h-screen">
          <Hero />
        </section>
        
        <section className="relative -mt-20 bg-gradient-to-b from-[#0A192F] to-[#112240] z-10">
          <div className="transform -skew-y-3 bg-[#112240]/50 backdrop-blur-sm py-32 -mb-16">
            <div className="transform skew-y-3">
              <About />
            </div>
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
      </div>
      
      <AIAssistant />
    </main>
  );
}
