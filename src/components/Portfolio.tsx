import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

import cvPdf from '@/assets/curriculo.pdf';
import fotoPerfil from '@/assets/eu.jpg';
import proaudio from '@/assets/proaudio.jpg';
import hamburguer from '@/assets/hamburgueria.jpg';
import HoM from '@/assets/HoM.jpg';
import rotaCerta from '@/assets/rotacerta.jpg';

const LINKEDIN = 'https://www.linkedin.com/in/danilo-vaz-3442bb2b0';
const GITHUB = 'https://github.com/danilovaz7';
const EMAIL = 'danilovaz06dv@gmail.com';

const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'contato', label: 'Contato' },
];

const languages = [
  { name: 'Português', level: 'Nativo', fill: 3 },
  { name: 'Inglês', level: 'Avançado', fill: 3 },
  { name: 'Espanhol', level: 'Intermediário', fill: 2 },
];

const skills = [
  {
    group: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Tailwind CSS', 'HTML e CSS', 'Design responsivo'],
  },
  {
    group: 'Back-end',
    items: ['Node.js', 'Express', 'APIs REST', 'Socket.IO', 'JWT', 'Sequelize'],
    extra: 'Noções de Java, PHP e Python',
  },
  {
    group: 'Banco de dados',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Modelagem de dados'],
  },
  {
    group: 'Dados e automação',
    items: ['Power BI (DAX, Power Query)', 'Power Apps', 'Power Automate', 'Excel', 'WordPress'],
  },
  {
    group: 'DevOps e dia a dia',
    items: ['Git e GitHub', 'Docker', 'Vercel', 'CI/CD', 'Testes automatizados', 'Figma', 'Scrum e Kanban', 'Cursor'],
  },
];

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
  github?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: 'Rota Certa',
    tagline: 'Otimizador de rotas de entrega',
    description:
      'Você cola os endereços em qualquer ordem e ele calcula a sequência com menos quilômetros, pronta para abrir no Google Maps ou no Waze. Escrevi o algoritmo do caixeiro viajante na mão: exato até 9 paradas e, acima disso, heurísticas (2-opt e Or-opt) que resolvem 60 paradas em menos de meio segundo.',
    tech: ['React', 'Vite', 'Leaflet', 'OSRM', 'Testes automatizados'],
    image: rotaCerta,
    imageAlt: 'Tela do Rota Certa com a lista de endereços e a rota no mapa',
    link: 'https://rota-certa-neon.vercel.app',
    github: 'https://github.com/danilovaz7/rota-certa',
  },
  {
    title: 'Play2Learn',
    tagline: 'Gamificação contra a evasão escolar (TCC do técnico)',
    description:
      'Quiz multiplayer em tempo real, com salas, contagem regressiva e chat, ranking por elos e um painel de desempenho para os professores. Fiz a modelagem do banco e a API REST. Testamos com uma turma de verdade no Liceu Santista.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'Sequelize', 'JWT', 'Docker'],
    github: 'https://github.com/danilovaz7/tccFront',
  },
  {
    title: 'House of Memories',
    tagline: 'Organizador de tarefas em mapa mental',
    description:
      'Tarefas espalhadas num mapa que dá para arrastar e soltar, com calendário mensal para remarcar o que ficou para depois. Cada quadro tem link próprio e as mudanças são salvas na hora.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Redis'],
    image: HoM,
    imageAlt: 'Tela do House of Memories com tarefas num mapa mental',
    link: 'https://house-of-memories.vercel.app',
    github: 'https://github.com/danilovaz7/HouseOfMemories',
  },
  {
    title: 'Burguer House',
    tagline: 'Cardápio online de demonstração',
    description: 'Cardápio de uma hamburgueria fictícia, pensado para ser usado no celular.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'shadcn/ui'],
    image: hamburguer,
    imageAlt: 'Tela do cardápio da Burguer House',
    link: 'https://buguer-house.vercel.app',
    github: 'https://github.com/danilovaz7/buguer-house',
  },
  {
    title: 'Pro Audio',
    tagline: 'Landing page para empresa de eventos',
    description:
      'Site para uma empresa de som e iluminação, com portfólio de eventos e contato direto pelo WhatsApp. Feito mobile-first.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: proaudio,
    imageAlt: 'Tela da landing page da Pro Audio',
    github: 'https://github.com/danilovaz7/ProAudio',
    note: 'O site em produção é fechado para o cliente.',
  },
];

const experience = [
  {
    period: '2026 — hoje',
    role: 'Estagiário de Operações Portuárias',
    place: 'DP World Santos',
    text: 'Faço apps em Power Apps que os operadores do porto usam no dia a dia, automações em Power Automate ligadas aos horários de atracação dos navios e dashboards em Power BI (DAX e Power Query) com os indicadores da operação.',
    tags: ['Power Apps', 'Power Automate', 'Power BI'],
  },
  {
    period: '2025 — hoje',
    role: 'Desenvolvedor Full Stack (freelance)',
    place: 'Kolmeia Network, Forumpsico',
    href: 'https://forumpsico.com.br',
    text: 'Construí quase toda a Forumpsico, plataforma de cursos de psicologia por assinatura, junto com o professor responsável. Fiz o cadastro de usuários, a integração de pagamento das assinaturas, formulários, plugins e a tradução do site. Ela está em lançamento, já com alunos ativos.',
    tags: ['WordPress', 'PHP', 'Pagamentos'],
  },
  {
    period: '2025 — 2026',
    role: 'Estagiário de Despacho Aduaneiro',
    place: 'Maersk Brasil (Brasmar)',
    text: 'Analisava documentos de comércio exterior, dava suporte ao desembaraço aduaneiro e organizava em Excel os dados de controle dos processos.',
    tags: ['Comércio exterior', 'Excel'],
  },
];

const education = [
  { period: '2024 — dez 2026', title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', place: 'Fatec Rubens Lara' },
  { period: '2023 — 2025', title: 'Técnico em Desenvolvimento de Sistemas', place: 'Liceu Santista' },
  { period: '109 horas', title: 'Desenvolvimento Web Completo', place: 'Udemy' },
];

const Portfolio = () => {
  const [active, setActive] = useState('sobre');
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const move = (e: PointerEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty('--x', `${e.clientX}px`);
      el.style.setProperty('--y', `${e.clientY}px`);
      el.style.opacity = '1';
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div className="relative min-h-screen bg-mist text-forest font-body">
      <div ref={glowRef} aria-hidden="true" className="glow" />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <div className="relative mx-auto max-w-[78rem] px-6 md:px-12 lg:flex lg:justify-between lg:gap-16 lg:px-16">
        {/* Coluna fixa */}
        <header className="pt-14 lg:sticky lg:top-0 lg:max-h-screen lg:w-[44%] lg:overflow-y-auto lg:py-14 [scrollbar-width:none]">
          <div className="flex items-center gap-4">
            <img
              src={fotoPerfil}
              alt="Foto de Danilo Vaz"
              className="h-16 w-16 rounded-full object-cover object-top ring-4 ring-mint"
              width={64}
              height={64}
            />
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Aberto a vagas
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl">Danilo Vaz</h1>
          <p className="mt-2 font-display text-xl font-medium text-pine">Desenvolvedor Full Stack Júnior</p>
          <p className="mt-3 max-w-sm leading-relaxed text-moss">
            Faço sistemas web e automações em Santos. Procuro vaga de dev em São Paulo e região, híbrido ou remoto.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="btn-primary" href={cvPdf} download="Curriculo_Danilo_Vaz.pdf">
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar currículo
            </a>
            <a className="icon-btn" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a className="icon-btn" href={`mailto:${EMAIL}`} aria-label="Enviar e-mail">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="lang-card mt-7 max-w-sm">
            <p className="font-display text-sm font-semibold text-pine">Idiomas</p>
            <ul className="mt-2.5 space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between gap-4">
                  <span className="font-display font-semibold">{lang.name}</span>
                  <span className="flex items-center gap-3 text-sm text-moss">
                    {lang.level}
                    <span className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <span key={n} className={`h-2 w-5 rounded-full ${n <= lang.fill ? 'bg-pine' : 'bg-mint'}`} />
                      ))}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Seções" className="mt-8 hidden lg:block">
            <ul>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-item ${active === id ? 'is-active' : ''}`}
                    aria-current={active === id ? 'true' : undefined}
                  >
                    <span className="nav-line" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Conteúdo */}
        <main id="conteudo" className="pb-24 pt-20 lg:w-[52%] lg:py-14">
          <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-20">
            <h2 id="sobre-titulo" className="section-heading">Sobre</h2>
            <div className="space-y-4 text-[1.075rem] leading-relaxed text-moss">
              <p>
                Oi! Eu sou o Danilo. Fiz o técnico em Desenvolvimento de Sistemas no Liceu Santista e hoje estou terminando
                Análise e Desenvolvimento de Sistemas na <strong className="text-forest">Fatec Rubens Lara</strong>,
                com formatura em dezembro de 2026.
              </p>
              <p>
                De dia, sou estagiário na <strong className="text-forest">DP World</strong>, onde faço apps, automações e
                dashboards que ajudam a operação do porto de Santos a rodar. Por fora, desenvolvo como freelancer a{' '}
                <strong className="text-forest">Forumpsico</strong>, uma plataforma de cursos de psicologia que construí
                quase inteira com meu professor.
              </p>
              <p>
                O que mais gosto é pegar um problema do dia a dia, tipo montar a melhor rota de entregas, e transformar
                num sistema que as pessoas usam de verdade.
              </p>
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-titulo" className="mt-28 scroll-mt-20">
            <h2 id="skills-titulo" className="section-heading">Skills</h2>
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {skills.map((block) => (
                <div key={block.group}>
                  <h3 className="font-display text-lg font-semibold">{block.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <li key={item} className="chip">{item}</li>
                    ))}
                  </ul>
                  {block.extra && <p className="mt-2.5 text-sm text-moss">{block.extra}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="projetos" aria-labelledby="projetos-titulo" className="mt-28 scroll-mt-20">
            <h2 id="projetos-titulo" className="section-heading">Projetos</h2>
            <ul className="-mx-4 space-y-4">
              {projects.map((project) => {
                const main = project.link ?? project.github;
                return (
                  <li key={project.title} className="project-card">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-lg object-cover object-left-top ring-1 ring-forest/10 sm:w-44 sm:shrink-0"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold leading-snug">
                        <a href={main} target="_blank" rel="noopener noreferrer" className="card-link">
                          {project.title}
                          <ExternalLink className="ml-1.5 inline h-4 w-4 -translate-y-px text-sage" aria-hidden="true" />
                        </a>
                      </h3>
                      <p className="text-sm font-medium text-pine">{project.tagline}</p>
                      <p className="mt-2.5 leading-relaxed text-moss">{project.description}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tecnologias">
                        {project.tech.map((t) => (
                          <li key={t} className="chip chip-sm">{t}</li>
                        ))}
                      </ul>
                      <div className="relative z-10 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                        {project.link && (
                          <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            Abrir o site
                          </a>
                        )}
                        {project.github && (
                          <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">
                            Ver o código
                          </a>
                        )}
                        {project.note && <span className="font-normal text-moss">{project.note}</span>}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="mt-28 scroll-mt-20">
            <h2 id="trajetoria-titulo" className="section-heading">Trajetória</h2>
            <ol className="relative space-y-10 border-l-2 border-mint pl-7">
              {experience.map((item) => (
                <li key={item.role} className="relative">
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="text-sm font-medium text-sage-dark">{item.period}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{item.role}</h3>
                  <p className="font-medium text-pine">
                    {item.href ? (
                      <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.place}
                      </a>
                    ) : (
                      item.place
                    )}
                  </p>
                  <p className="mt-2.5 leading-relaxed text-moss">{item.text}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <li key={t} className="chip chip-sm">{t}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <h3 className="mt-16 font-display text-xl font-semibold">Formação</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {education.map((item) => (
                <li key={item.title} className="edu-card">
                  <p className="text-sm text-sage-dark">{item.period}</p>
                  <p className="mt-1.5 font-display font-semibold leading-snug">{item.title}</p>
                  <p className="mt-1 text-sm text-moss">{item.place}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="contato" aria-labelledby="contato-titulo" className="mt-28 scroll-mt-20">
            <h2 id="contato-titulo" className="section-heading">Contato</h2>
            <div className="contact-box">
              <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                Tem uma vaga ou um projeto em mente? Bora conversar.
              </p>
              <p className="mt-3 text-moss">Pode me chamar por e-mail ou pelo LinkedIn.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn-primary" href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {EMAIL}
                </a>
                <a className="btn-ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
            <p className="mt-16 text-sm text-moss">
              Feito por mim com React, TypeScript e Tailwind CSS. © {new Date().getFullYear()} Danilo Vaz.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
