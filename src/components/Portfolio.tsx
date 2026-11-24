import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowUpRight, MapPin, Briefcase, Code2, Database, Workflow, Wrench, Server } from 'lucide-react';

import cvPdf from '@/assets/curriculo.pdf';
import fotoPerfil from '@/assets/eu.jpg';
import proaudio from '@/assets/proaudio.jpg';
import hamburguer from '@/assets/hamburgueria.jpg';
import HoM from '@/assets/HoM.jpg';
import rotaCerta from '@/assets/rotacerta.jpg';

const LINKEDIN = 'https://www.linkedin.com/in/danilo-vaz-3442bb2b0';
const GITHUB = 'https://github.com/danilovaz7';
const EMAIL = 'danilovaz06dv@gmail.com';

const navItems = [
  { id: 'skills', label: 'Skills' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'contato', label: 'Contato' },
];

const languages = [
  { code: 'PT', name: 'Português', level: 'Nativo', pct: 100 },
  { code: 'EN', name: 'Inglês', level: 'Avançado', pct: 85 },
  { code: 'ES', name: 'Espanhol', level: 'Intermediário', pct: 60 },
];

const stack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS', 'PostgreSQL', 'MySQL',
  'MongoDB', 'Redis', 'Docker', 'Power BI', 'Power Apps', 'Power Automate', 'WordPress', 'Git', 'Vercel',
];

const skillGroups = [
  { icon: Code2, title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Tailwind CSS', 'HTML e CSS', 'Design responsivo'], tone: 'tile-mint', span: 'md:col-span-2' },
  { icon: Server, title: 'Back-end', items: ['Node.js', 'Express', 'APIs REST', 'Socket.IO', 'JWT', 'Sequelize'], note: 'Noções de Java, PHP e Python', tone: 'tile-dark', span: '' },
  { icon: Database, title: 'Banco de dados', items: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Modelagem'], tone: 'tile-dark', span: '' },
  { icon: Workflow, title: 'Dados e automação', items: ['Power BI (DAX, Power Query)', 'Power Apps', 'Power Automate', 'Excel', 'WordPress'], tone: 'tile-sand', span: 'md:col-span-2' },
  { icon: Wrench, title: 'DevOps e dia a dia', items: ['Git e GitHub', 'Docker', 'Vercel', 'CI/CD', 'Testes', 'Figma', 'Scrum', 'Kanban', 'Cursor'], tone: 'tile-sage', span: 'md:col-span-2' },
];

type Project = {
  title: string;
  kind: string;
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
  github?: string;
  note?: string;
};

const featured: Project = {
  title: 'Rota Certa',
  kind: 'Otimizador de rotas de entrega',
  description:
    'Você cola os endereços em qualquer ordem e ele devolve a sequência com menos quilômetros, pronta para abrir no Google Maps ou no Waze. O algoritmo do caixeiro viajante é meu: exato até 9 paradas e, acima disso, 2-opt e Or-opt resolvendo 60 paradas em menos de meio segundo.',
  tech: ['React', 'Vite', 'Leaflet', 'OSRM', 'Testes automatizados'],
  image: rotaCerta,
  imageAlt: 'Tela do Rota Certa com a lista de endereços e a rota no mapa',
  link: 'https://rota-certa-neon.vercel.app',
  github: 'https://github.com/danilovaz7/rota-certa',
};

const projects: Project[] = [
  {
    title: 'Play2Learn',
    kind: 'TCC do técnico · gamificação',
    description: 'Quiz multiplayer em tempo real com salas, chat e ranking por elos, e um painel de desempenho para os professores. Fiz o banco e a API.',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'Docker'],
    github: 'https://github.com/danilovaz7/tccFront',
  },
  {
    title: 'House of Memories',
    kind: 'Organizador em mapa mental',
    description: 'Tarefas num mapa de arrastar e soltar, com calendário para remarcar e links compartilháveis.',
    tech: ['Next.js', 'TypeScript', 'Redis'],
    image: HoM,
    imageAlt: 'Tela do House of Memories',
    link: 'https://house-of-memories.vercel.app',
    github: 'https://github.com/danilovaz7/HouseOfMemories',
  },
  {
    title: 'Burguer House',
    kind: 'Cardápio online',
    description: 'Cardápio de uma hamburgueria fictícia, pensado para o celular.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    image: hamburguer,
    imageAlt: 'Tela da Burguer House',
    link: 'https://buguer-house.vercel.app',
    github: 'https://github.com/danilovaz7/buguer-house',
  },
  {
    title: 'Pro Audio',
    kind: 'Landing page de eventos',
    description: 'Site de uma empresa de som e luz, com portfólio e contato pelo WhatsApp. O site real é fechado para o cliente.',
    tech: ['React', 'Vite', 'Tailwind'],
    image: proaudio,
    imageAlt: 'Tela da Pro Audio',
    github: 'https://github.com/danilovaz7/ProAudio',
  },
];

const experience = [
  {
    period: 'mar 2026 – hoje',
    role: 'Estagiário de Operações Portuárias',
    place: 'DP World Santos',
    text: 'Apps em Power Apps usados pelos operadores do porto, automações em Power Automate ligadas à atracação dos navios e dashboards em Power BI com DAX e Power Query.',
  },
  {
    period: 'jul 2025 – hoje',
    role: 'Desenvolvedor Full Stack (freelance)',
    place: 'Kolmeia Network · Forumpsico',
    href: 'https://forumpsico.com.br',
    text: 'Construí quase toda a plataforma de cursos de psicologia por assinatura com o professor responsável: cadastro, pagamento das assinaturas, formulários, plugins e tradução. Já tem alunos ativos.',
  },
  {
    period: 'nov 2025 – mar 2026',
    role: 'Estagiário de Despacho Aduaneiro',
    place: 'Maersk Brasil (Brasmar)',
    text: 'Análise de documentos de comércio exterior, apoio ao desembaraço aduaneiro e controle dos processos em Excel.',
  },
];

const education = [
  { when: 'até dez 2026', title: 'Análise e Desenvolvimento de Sistemas', place: 'Fatec Rubens Lara' },
  { when: '2023 – 2025', title: 'Técnico em Desenvolvimento de Sistemas', place: 'Liceu Santista' },
  { when: '109 h', title: 'Desenvolvimento Web Completo', place: 'Udemy' },
];

/* Mapa com uma rota sendo desenhada, como no Rota Certa */
const RouteMap = () => (
  <svg viewBox="0 0 320 190" className="h-full w-full" role="img" aria-label="Ilustração de uma rota ligando cinco paradas">
    <defs>
      <pattern id="streets" width="40" height="38" patternUnits="userSpaceOnUse">
        <rect width="40" height="38" fill="none" />
        <rect x="4" y="4" width="32" height="30" rx="4" fill="rgba(207,233,214,0.07)" />
      </pattern>
    </defs>
    <rect width="320" height="190" fill="url(#streets)" />
    <path d="M0 160 C 80 150, 140 175, 320 150 L320 190 L0 190 Z" fill="rgba(143,196,160,0.16)" />
    <path
      className="route-path"
      d="M24 128 L24 88 L104 88 L104 48 L184 48 L184 108 L264 108 L264 68 L296 68"
      fill="none"
      stroke="#CFE9D6"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[
      [24, 128, 'S'],
      [104, 88, '1'],
      [184, 48, '2'],
      [184, 108, '3'],
      [264, 108, '4'],
      [296, 68, '5'],
    ].map(([x, y, label], i) => (
      <g key={i} className="route-stop" style={{ animationDelay: `${0.35 + i * 0.28}s` }}>
        <circle cx={x as number} cy={y as number} r="10" fill={label === 'S' ? '#EADFC6' : '#2F6B4C'} stroke="#0C1A13" strokeWidth="3" />
        <text x={x as number} y={(y as number) + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={label === 'S' ? '#0C1A13' : '#EAF3EC'} fontFamily="Figtree, sans-serif">
          {label}
        </text>
      </g>
    ))}
  </svg>
);

/* Arte do Play2Learn: os elos do jogo, do aprendiz ao brilhante */
const EloArt = () => {
  const elos = ['Aprendiz', 'Regular', 'Estudioso', 'Exemplar', 'Avançado', 'Brilhante'];
  return (
    <div className="elo-art" aria-hidden="true">
      {elos.map((e, i) => (
        <span key={e} className="elo" style={{ ['--i' as string]: i }}>
          {e}
        </span>
      ))}
    </div>
  );
};

const LangRing = ({ pct }: { pct: number }) => {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90" aria-hidden="true">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(12,26,19,0.12)" strokeWidth="6" />
      <circle cx="28" cy="28" r={r} fill="none" stroke="#2F6B4C" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${(pct / 100) * c} ${c}`} />
    </svg>
  );
};

const ProjectLinks = ({ p }: { p: Project }) => (
  <div className="relative z-10 mt-4 flex flex-wrap gap-2">
    {p.link && (
      <a className="pill-link" href={p.link} target="_blank" rel="noopener noreferrer">
        Abrir o site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
    {p.github && (
      <a className="pill-link pill-link-ghost" href={p.github} target="_blank" rel="noopener noreferrer">
        <Github className="h-4 w-4" aria-hidden="true" /> Código
      </a>
    )}
  </div>
);

const Portfolio = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => {
      if (window.scrollY < 200) setActive('');
      else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive('contato');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-night text-cloud font-body">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      {/* Navegação flutuante */}
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <nav aria-label="Principal" className="nav-pill">
          <a href="#topo" className="nav-logo" aria-label="Início">
            dv<span className="text-sage">.</span>
          </a>
          <ul className="flex items-center gap-0.5 overflow-x-auto [scrollbar-width:none]">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={`nav-link ${active === id ? 'is-active' : ''}`} aria-current={active === id ? 'true' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href={cvPdf} download="Curriculo_Danilo_Vaz.pdf" className="nav-cv">
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Currículo</span>
          </a>
        </nav>
      </header>

      <main id="conteudo" className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        {/* Bento de abertura */}
        <section id="topo" aria-label="Apresentação" className="bento">
          <div className="tile tile-dark intro md:col-span-7 md:row-span-2">
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" /> Aberto a vagas de dev júnior
            </span>
            <h1 className="hero-title mt-8">
              Oi, eu sou o Danilo.
              <span className="hero-sub">Faço sistemas web que resolvem problema de verdade.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fog">
              Desenvolvedor full stack em Santos. De dia, construo apps e dashboards para a operação do porto na DP World.
              No resto do tempo, crio projetos como os que você vai ver aqui embaixo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-mint">Ver projetos</a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">
                <Mail className="h-4 w-4" aria-hidden="true" /> Falar comigo
              </a>
            </div>
          </div>

          <figure className="tile photo-tile md:col-span-5 md:row-span-2">
            <img src={fotoPerfil} alt="Danilo Vaz sorrindo" className="h-full w-full object-cover" width={1066} height={1600} />
            <figcaption className="photo-caption">
              <span className="font-display text-lg font-bold">Danilo Vaz</span>
              <span className="text-sm">Desenvolvedor Full Stack Júnior</span>
            </figcaption>
          </figure>

          <div className="tile tile-mint md:col-span-4">
            <p className="tile-label">Idiomas</p>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li key={l.code} className="flex items-center gap-4">
                  <div className="relative">
                    <LangRing pct={l.pct} />
                    <span className="absolute inset-0 grid place-items-center font-display text-sm font-bold">{l.code}</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold leading-tight">{l.name}</p>
                    <p className="text-sm font-medium text-pine">{l.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="tile tile-dark map-tile md:col-span-4">
            <div className="map-wrap">
              <RouteMap />
            </div>
            <div className="relative mt-3">
              <p className="flex items-center gap-2 font-display text-lg font-bold">
                <MapPin className="h-5 w-5 text-sage" aria-hidden="true" /> Santos, SP
              </p>
              <p className="text-sm text-fog">Disponível para São Paulo e região, híbrido ou remoto.</p>
            </div>
          </div>

          <div className="tile tile-sand md:col-span-4">
            <p className="tile-label">Agora</p>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                <div>
                  <p className="font-display font-bold leading-tight">Estágio na DP World</p>
                  <p className="text-sm text-night/70">Power Apps, Power Automate e Power BI</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                <div>
                  <p className="font-display font-bold leading-tight">Freela na Forumpsico</p>
                  <p className="text-sm text-night/70">Plataforma de cursos em WordPress</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pine text-[0.6rem] font-bold text-white" aria-hidden="true">F</span>
                <div>
                  <p className="font-display font-bold leading-tight">Último semestre na Fatec</p>
                  <p className="text-sm text-night/70">Formatura em dezembro de 2026</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Faixa de tecnologias */}
        <div className="marquee mt-4" aria-hidden="true">
          <div className="marquee-track">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="marquee-item">
                {s}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section id="skills" aria-labelledby="skills-titulo" className="section">
          <div className="section-head">
            <h2 id="skills-titulo" className="section-title">Skills</h2>
            <p className="section-lead">O que eu uso no trabalho e nos meus projetos.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {skillGroups.map(({ icon: Icon, title, items, note, tone, span }) => (
              <div key={title} className={`tile ${tone} ${span}`}>
                <div className="flex items-center gap-3">
                  <span className="icon-badge"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((i) => (
                    <li key={i} className="chip">{i}</li>
                  ))}
                </ul>
                {note && <p className="mt-3 text-sm opacity-75">{note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" aria-labelledby="projetos-titulo" className="section">
          <div className="section-head">
            <h2 id="projetos-titulo" className="section-title">Projetos</h2>
            <p className="section-lead">Coisas que eu construí, com código aberto e versão online quando dá.</p>
          </div>

          <article className="tile tile-dark featured">
            <div className="featured-text">
              <span className="tag-featured">Projeto em destaque</span>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-tight">{featured.title}</h3>
              <p className="mt-1 font-medium text-sage">{featured.kind}</p>
              <p className="mt-4 leading-relaxed text-fog">{featured.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <li key={t} className="chip chip-dark">{t}</li>
                ))}
              </ul>
              <ProjectLinks p={featured} />
            </div>
            <a href={featured.link} target="_blank" rel="noopener noreferrer" className="featured-shot" aria-label="Abrir o Rota Certa">
              <img src={featured.image} alt={featured.imageAlt} loading="lazy" className="h-full w-full object-cover object-left-top" />
            </a>
          </article>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="tile tile-dark project">
                <div className="project-shot">
                  {p.image ? (
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover object-left-top" />
                  ) : (
                    <EloArt />
                  )}
                </div>
                <div className="mt-5">
                  <p className="text-sm font-medium text-sage">{p.kind}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-fog">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <li key={t} className="chip chip-dark chip-sm">{t}</li>
                    ))}
                  </ul>
                  <ProjectLinks p={p} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trajetória */}
        <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="section">
          <div className="section-head">
            <h2 id="trajetoria-titulo" className="section-title">Trajetória</h2>
            <p className="section-lead">Trabalho e estudo ao mesmo tempo desde o técnico.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <ol className="tile tile-dark lg:col-span-2">
              {experience.map((e, i) => (
                <li key={e.role} className={`timeline-item ${i === experience.length - 1 ? 'is-last' : ''}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="text-sm font-semibold text-sage">{e.period}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{e.role}</h3>
                  <p className="font-medium text-mint">
                    {e.href ? (
                      <a className="underline decoration-sage/60 underline-offset-4 hover:decoration-mint" href={e.href} target="_blank" rel="noopener noreferrer">{e.place}</a>
                    ) : (
                      e.place
                    )}
                  </p>
                  <p className="mt-2 leading-relaxed text-fog">{e.text}</p>
                </li>
              ))}
            </ol>
            <div className="grid gap-4">
              {education.map((ed, i) => (
                <div key={ed.title} className={`tile ${i === 0 ? 'tile-mint' : i === 1 ? 'tile-sage' : 'tile-sand'}`}>
                  <p className="text-sm font-semibold opacity-75">{ed.when}</p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug">{ed.title}</p>
                  <p className="text-sm font-medium opacity-80">{ed.place}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" aria-labelledby="contato-titulo" className="section">
          <div className="tile contact">
            <h2 id="contato-titulo" className="contact-title">
              Bora construir alguma coisa juntos?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-night/75">
              Se você tem uma vaga ou um projeto em mente, me chama. Respondo por e-mail e pelo LinkedIn.
            </p>
            <a href={`mailto:${EMAIL}`} className="contact-mail">
              {EMAIL}
              <ArrowUpRight className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" aria-hidden="true" />
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-night" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
              <a className="btn-night" href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
              <a className="btn-night" href={cvPdf} download="Curriculo_Danilo_Vaz.pdf">
                <Download className="h-4 w-4" aria-hidden="true" /> Currículo em PDF
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-fog">
            Feito por mim com React, TypeScript e Tailwind · © {new Date().getFullYear()} Danilo Vaz
          </p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
