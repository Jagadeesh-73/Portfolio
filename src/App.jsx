import Bio from "./components/Bio";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow relative overflow-y-auto">
        {/* Background Image */}
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img z-[-1]"></div>

        {/* Content Sections */}
        <div className="relative z-10 flex flex-col items-center p-6 space-y-12 container mx-auto">
          <section id="hero" className="w-full">
            <Hero />
          </section>
          <section id="projects" className="w-full">
            <Projects />
          </section>
          <section id="bio" className="w-full">
            <Bio />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="work-experience" className="w-full">
            <WorkExperience />
          </section>
          <section id="education" className="w-full">
            <Education />
          </section>
          <section id="contact" className="w-full max-w-4xl mx-auto px-4">
            <ContactForm />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
