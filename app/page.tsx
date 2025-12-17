'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const translations = {
    es: {
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto"
      },
      hero: {
        greeting: "Hola, soy",
        role: "Desarrollador Fullstack",
        title: "Técnico en Desarrollo Web",
        description: "Especializado en crear soluciones web robustas y escalables. Apasionado por el código limpio y la arquitectura de sistemas.",
        cta: "Ver mi trabajo",
        downloadCV: "Descargar CV"
      },
      about: {
        title: "Sobre mí",
        text: [
          "Soy Técnico en Desarrollo Web egresado de la Universidad Nacional de La Matanza. Mi camino en la programación comenzó de forma autodidacta, explorando tutoriales y documentación por curiosidad, lo que luego se consolidó con formación académica formal en diferentes centros educativos y la universidad.",
          "Me especializo en desarrollo Full Stack con Node.js, Angular y React, aplicando arquitecturas limpias y buenas prácticas. Tengo experiencia trabajando con Spring Boot, implementando autenticación, integración de APIs de terceros como OpenAI, Gemini y MercadoPago, y automatización de pruebas.",
          "Actualmente trabajo como freelance en Mercado Sinérgico, donde diseño y desarrollo aplicaciones web escalables. Me apasiona el aprendizaje continuo, la optimización de la experiencia del usuario y la construcción de soluciones que resuelven problemas reales."
        ]
      },
      experience: {
        title: "Experiencia & Habilidades",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas & Otros"
      },
      projects: {
        title: "Proyectos Destacados",
        viewProject: "Ver proyecto",
        viewCode: "Ver código",
        items: [
          {
            name: "Oniria",
            description: "Plataforma de interpretación de sueños mediante IA en un entorno virtual 3D interactivo. Integración con APIs de OpenAI y Gemini, autenticación basada en roles con Supabase y pagos con MercadoPago.",
            tags: ["React", "Three.js", "Node.js", "OpenAI", "Supabase"]
          },
          {
            name: "Mercado Sinérgico",
            description: "Sistema de compras colaborativas con arquitectura modular. Backend en Node.js + TypeScript con autenticación JWT, bcrypt y automatización de pruebas (unitarias, integración, e2e). CI/CD implementado.",
            tags: ["Angular", "Node.js", "PostgreSQL", "TypeScript", "JWT"]
          },
          {
            name: "Comunico",
            description: "Plataforma educativa inclusiva para aprendizaje de lengua de señas y braille. Backend con Spring Boot, Hibernate y MySQL aplicando TDD y arquitectura por capas.",
            tags: ["Java", "Spring Boot", "MySQL", "Hibernate", "TDD"]
          }
        ]
      },
      contact: {
        title: "Contacto",
        description: "Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme.",
        email: "Email",
        location: "Ubicación",
        locationValue: "Buenos Aires, Argentina"
      },
      footer: "Diseñado y desarrollado por Martín Mutuverría"
    },
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I'm",
        role: "Fullstack Developer",
        title: "Web Development Technician",
        description: "Specialized in building robust and scalable web solutions. Passionate about clean code and system architecture.",
        cta: "View my work",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me",
        text: [
          "I'm a Web Development Technician graduated from Universidad Nacional de La Matanza. My programming journey began self-taught, exploring tutorials and documentation out of curiosity, which later solidified with formal academic training at different educational centers and the university.",
          "I specialize in Full Stack development with Node.js, Angular, and React, applying clean architectures and best practices. I have experience working with Spring Boot, implementing authentication, integrating third-party APIs like OpenAI, Gemini, and MercadoPago, and test automation.",
          "I currently work as a freelancer at Mercado Sinérgico, where I design and develop scalable web applications. I'm passionate about continuous learning, optimizing user experience, and building solutions that solve real problems."
        ]
      },
      experience: {
        title: "Experience & Skills",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools & Others"
      },
      projects: {
        title: "Featured Projects",
        viewProject: "View project",
        viewCode: "View code",
        items: [
          {
            name: "Oniria",
            description: "AI-powered dream interpretation platform in an interactive 3D virtual environment. Integration with OpenAI and Gemini APIs, role-based authentication with Supabase, and payment processing with MercadoPago.",
            tags: ["React", "Three.js", "Node.js", "OpenAI", "Supabase"]
          },
          {
            name: "Mercado Sinérgico",
            description: "Collaborative shopping system with modular architecture. Backend in Node.js + TypeScript with JWT authentication, bcrypt, and test automation (unit, integration, e2e). CI/CD implemented.",
            tags: ["Angular", "Node.js", "PostgreSQL", "TypeScript", "JWT"]
          },
          {
            name: "Comunico",
            description: "Inclusive educational platform for learning sign language and braille. Backend with Spring Boot, Hibernate, and MySQL applying TDD and layered architecture.",
            tags: ["Java", "Spring Boot", "MySQL", "Hibernate", "TDD"]
          }
        ]
      },
      contact: {
        title: "Get In Touch",
        description: "I'm available for new opportunities and collaborations. Feel free to reach out.",
        email: "Email",
        location: "Location",
        locationValue: "Buenos Aires, Argentina"
      },
      footer: "Designed and developed by Martín Mutuverría"
    }
  };

  const t = translations[language];

  const projectsData = [
    { 
      liveUrl: "https://app.oniria3d.com.ar/", 
      repoUrl: null,
      image: "/oniria.jpg"
    },
    { 
      liveUrl: "https://ashy-ocean-0926d411e.3.azurestaticapps.net/", 
      repoUrl: "https://github.com/ma3rtin/mercado-sinergico-app",
      image: "/mercado-sinergico.png"
    },
    { 
      liveUrl: null, 
      repoUrl: "https://github.com/AilinVara/TWI-Comunico",
      image: "/comunico.png"
    }
  ];

  const skills = {
    frontend: ["Angular", "React", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
    backend: ["Node.js", "Java", "PHP", "Express", "Spring Boot", "ASP.NET", "Hibernate"],
    tools: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Git", "Docker", "Jest", "CI/CD"]
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-emerald-500">Martín M.</a>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                title={t.nav.about}
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                title={t.nav.experience}
              >
                {t.nav.experience}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                title={t.nav.projects}
              >
                {t.nav.projects}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                title={t.nav.contact}
              >
                {t.nav.contact}
              </button>
              
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 hover:border-gray-500 rounded text-sm transition-colors"
                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <Globe size={14} />
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text */}
            <div>
              <p className="text-emerald-500 text-sm mb-4">{t.hero.greeting}</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
                Martín
                <br />
                Mutuverría
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-2">
                {t.hero.role}
              </h2>
              <p className="text-emerald-500/80 text-sm mb-6">
                {t.hero.title}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors flex items-center gap-2"
                  title={t.hero.cta}
                >
                  {t.hero.cta}
                  <ArrowUpRight size={18} />
                </button>
                <a 
                  href="/CV-Martin_Mutuverria.pdf"
                  download
                  className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded transition-colors flex items-center gap-2"
                  title={t.hero.downloadCV}
                >
                  <Download size={18} />
                  {t.hero.downloadCV}
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/ma3rtin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:mutuverria00@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-gray-800">
                  <img 
                    src="/portfolio.png" 
                    alt="Martín Mutuverría"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-600/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            {t.about.title}
          </h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed">
            {t.about.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            {t.experience.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-500">
                {t.experience.frontend}
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-500">
                {t.experience.backend}
              </h3>
              <div className="space-y-3">
                {skills.backend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-500">
                {t.experience.tools}
              </h3>
              <div className="space-y-3">
                {skills.tools.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            {t.projects.title}
          </h2>

          <div className="space-y-24">
            {t.projects.items.map((project, index) => (
              <div key={project.name} className="group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-video rounded-lg border border-gray-800 overflow-hidden bg-gray-900 group-hover:border-emerald-600/50 transition-all duration-300">
                      <img 
                        src={projectsData[index].image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-500 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs bg-gray-900 text-emerald-500 rounded border border-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {projectsData[index].liveUrl && (
                        <a
                          href={projectsData[index].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                          title={t.projects.viewProject}
                        >
                          <ExternalLink size={16} />
                          {t.projects.viewProject}
                        </a>
                      )}
                      {projectsData[index].repoUrl && (
                        <a
                          href={projectsData[index].repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          title={t.projects.viewCode}
                        >
                          <Github size={16} />
                          {t.projects.viewCode}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t.contact.title}
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Mail className="text-emerald-500" size={20} />
                <h3 className="font-semibold text-white">{t.contact.email}</h3>
              </div>
              <a 
                href="mailto:mutuverria00@gmail.com"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                mutuverria00@gmail.com
              </a>
            </div>

            <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-3">
                <MapPin className="text-emerald-500" size={20} />
                <h3 className="font-semibold text-white">{t.contact.location}</h3>
              </div>
              <p className="text-gray-400">{t.contact.locationValue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 {t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;