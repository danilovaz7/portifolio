import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe, MonitorSpeaker, Server, Database, Settings } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import cvPdf from '@/assets/curriculoDan2025.pdf';
import heroImage from '@/assets/hero-bg.jpg';
import fotoPerfil from '@/assets/eu.jpg'
import clinicaleutz from '@/assets/ClinicaLeutz.jpg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector('nav');
    const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
    const extraOffset = 12;

    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - extraOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
  const skillCategories = {
    frontend: {
      name: 'Front-end',
      icon: MonitorSpeaker,
      skills: [
        { name: 'React', icon: Code },
        { name: 'HTML', icon: Globe },
        { name: 'CSS', icon: Palette },
        { name: 'Tailwind', icon: Palette },
        { name: 'HeroUI', icon: Code },
        { name: 'JavaScript', icon: Code },
      ]
    },
    backend: {
      name: 'Back-end',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'JavaScript', icon: Code },
        { name: 'Java', icon: Code },
      ]
    },
    database: {
      name: 'Banco de Dados',
      icon: Database,
      skills: [
        { name: 'MySQL', icon: Database },
        { name: 'SQL Server', icon: Database },
        { name: 'MongoDB', icon: Database },
      ]
    },
    tools: {
      name: 'Ferramentas',
      icon: Settings,
      skills: [
        { name: 'Git', icon: Github },
        { name: 'Docker', icon: Settings },
        { name: 'VS Code', icon: Code },
        { name: 'Figma', icon: Palette },
      ]
    }
  };

  const projects = [
    {
      title: 'Clinica Leutz',
      description: 'Um site desenvolvido para gerenciar dados de clientes, orçamentos e procedimento para a Clínica Leutz',
      tech: ['React', 'Node.js', 'MySQL', 'Tailwind', 'HeroUI'],
      image: clinicaleutz,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass-card border-0 rounded-none backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="gradient-text text-xl font-bold">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-6">
              {['Início', 'Sobre', 'Skills', 'Projetos', 'Contato'].map((item, index) => {
                const id = sectionIds[index];
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`hover:text-primary transition-colors ${activeSection === id ? 'text-primary' : 'text-muted-foreground'
                      }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou <span className="gradient-text">Danilo Vaz</span>
            </h1>
          </div>
          <div className="fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
              e soluções inovadoras que fazem a diferença.
            </p>
          </div>
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-button border-0 text-white font-semibold px-8"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </Button>
            <a href={cvPdf} download="Danilo_Vaz_CV.pdf" aria-label="Baixar CV">
              <Button
                size="lg"
                className="gradient-button border-0 text-white font-semibold px-8"
              >
                Baixar CV
              </Button>
            </a>
          </div>
          <div className="fade-in-up delay-400 flex justify-center gap-6 mt-12">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <div key={index} className="glass-card p-3 hover-scale cursor-pointer icon-hover">
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-10 float-animation delay-100">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 float-animation delay-300">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-accent to-primary opacity-30 rotate-45" />
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça um pouco da minha jornada e paixão pela tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Sou formado como Técnico em Desenvolvimento de Sistemas, e atualmente, sou estudante do 4° período de
                Análise e Desenvolvimento de Sistemas pela Fatec Rubens Lara, em Santos-SP.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Entusiasta de React, Node.js e tecnologias modernas, sempre busco
                aprender novas ferramentas e metodologias para entregar soluções
                de alta qualidade.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Code, text: 'Clean Code' },
                  { icon: Palette, text: 'UI/UX Design' },
                  { icon: Globe, text: 'Web Performance' },
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="glass-card p-4 text-center card-hover">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary icon-hover" />
                    <p className="text-sm font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 text-center card-hover pulse-glow">
              <div className="relative w-60 h-72 mx-auto mb-6 rounded-2xl overflow-hidden shimmer">
                <img
                  src={fotoPerfil}
                  alt="Foto do desenvolvedor"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Desenvolvedor Freelancer</h3>
              <p className="text-muted-foreground">
                Trabalhando como freelancer, desenvolvendo soluções personalizadas
                para diversos clientes, desde pequenos negócios até empresas estabelecidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções incríveis
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={key}
                    variant={activeSkillCategory === key ? "default" : "outline"}
                    className={`glass-card px-6 py-3 ${activeSkillCategory === key
                      ? "gradient-button border-0 text-white"
                      : "btn-hover"
                      }`}
                    onClick={() => setActiveSkillCategory(key)}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

       
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in"
                >
                  {skillCategories[activeSkillCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={index}
                        className="glass-card p-6 text-center card-hover group pulse-glow "
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                          <Icon className="w-12 h-12 mx-auto icon-hover" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 gradient-text">
                          {skill.name}
                        </h3>
                        <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-70"></div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>


      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border-0 card-hover overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 btn-hover">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="gradient-text">Conversar</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tem uma ideia incrível? Vamos transformá-la em realidade juntos!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold gradient-text">Entre em Contato</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'danilovaz06dv@gmail.com', href: 'mailto:danilovaz06dv@gmail.com' },
                    { icon: Linkedin, text: '/in/danilo-vaz-3442bb2b0', href: 'https://www.linkedin.com/in/danilo-vaz-3442bb2b0' },
                    { icon: Github, text: '/danilovaz7', href: 'https://github.com/danilovaz7' },
                  ].map(({ icon: Icon, text, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 glass-card p-4 card-hover"
                      aria-label={`Abrir ${text} em nova aba`}
                    >
                      <Icon className="w-6 h-6 text-primary icon-hover" />
                      <span>{text}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <Button className="w-full gradient-button border-0 text-white font-semibold" onClick={(e) => { e.preventDefault(); }}>
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Danilo Vaz.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
