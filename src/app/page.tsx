import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsMatrix from '@/components/SkillsMatrix';
import ProjectShowcase from '@/components/ProjectShowcase';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  return (
    <main className="relative bg-[#0A192F] text-[#E6F1FF] overflow-x-hidden scroll-smooth">
      <div className="flex flex-col min-h-screen">
        <section id="home" className="h-screen relative">
          <Hero />
        </section>
        
        <section className="relative -mt-20 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] z-10">
          <div id="about" className="transform -skew-y-3 bg-[#112240]/50 backdrop-blur-sm py-32 -mb-16 transition-all duration-300 hover:bg-[#112240]/60">
            <div className="transform skew-y-3 container mx-auto px-4">
              <About />
            </div>
          </div>
          
          <div id="skills" className="section-padding container mx-auto px-4 py-16">
            <SkillsMatrix />
          </div>
          <div id="projects" className="section-padding container mx-auto px-4 py-16 bg-[#0A192F]/50">
            <ProjectShowcase />
          </div>
          <div id="certifications" className="section-padding container mx-auto px-4 py-16">
            <Certifications />
          </div>
          <div id="contact" className="section-padding container mx-auto px-4 py-16 bg-[#0A192F]/50">
            <Contact />
          </div>
        </section>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50">
        <AIAssistant />
      </div>
    </main>
  );
}
