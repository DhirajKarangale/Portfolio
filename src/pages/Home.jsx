import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ExperienceSection } from "../components/Experience";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Dhiraj Karangale | Full Stack Developer & AI Engineer</title>
        <meta name="description" content="Dhiraj Karangale is a Full Stack Developer & AI Engineer building scalable, high-performance web applications using React, Node.js, Next.js, PostgreSQL, Redis, and real-time systems. Expert in System Design (LLD/HLD)." />
      </Helmet>
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
