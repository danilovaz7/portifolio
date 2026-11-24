import cvPdf from '@/assets/curriculo.pdf';
import fotoPerfil from '@/assets/eu.jpg';
import proaudio from '@/assets/proaudio.jpg';
import hamburguer from '@/assets/hamburgueria.jpg';
import HoM from '@/assets/HoM.jpg';
import rotaCerta from '@/assets/rotacerta.jpg';

const LINKEDIN = 'https://www.linkedin.com/in/danilo-vaz-3442bb2b0';
const GITHUB = 'https://github.com/danilovaz7';
const EMAIL = 'danilovaz06dv@gmail.com';

type Project = {
  title: string;
  year: string;
  summary: string;
  detail?: string;
  tech: string[];
  image: string;
  imageAlt: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: 'Rota Certa',
    year: '2026',
    summary:
      'Você cola uma lista de endereços fora de ordem e ele devolve a sequência de entregas com menos quilômetros pelas ruas, pronta para abrir no Google Maps ou no Waze.',
    detail:
      'Escrevi o algoritmo do caixeiro viajante do zero. Ele resolve 60 paradas em menos de meio segundo, usando só mapas e dados abertos, sem chave de API.',
    tech: ['React', 'Vite', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'OSRM'],
    image: rotaCerta,
    imageAlt: 'Tela do Rota Certa com a lista de endereços e a rota desenhada no mapa',
    link: 'https://rota-certa-neon.vercel.app',
    github: 'https://github.com/danilovaz7/rota-certa',
  },
  {
    title: 'House of Memories',
    year: '2026',
    summary:
      'Organizador de tarefas em forma de mapa mental, com arrastar e soltar e um calendário mensal para remarcar o que ficou para depois.',
    detail:
      'Cada quadro tem um link próprio e pode ser particular ou compartilhado. As mudanças são salvas na hora, no Redis.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Redis'],
    image: HoM,
    imageAlt: 'Tela do House of Memories com tarefas espalhadas num mapa mental',
    link: 'https://house-of-memories.vercel.app',
    github: 'https://github.com/danilovaz7/HouseOfMemories',
  },
  {
    title: 'Burguer House',
    year: '2025',
    summary: 'Cardápio online de demonstração para uma hamburgueria fictícia.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'shadcn/ui'],
    image: hamburguer,
    imageAlt: 'Tela do cardápio da Burguer House',
    link: 'https://buguer-house.vercel.app',
    github: 'https://github.com/danilovaz7/buguer-house',
  },
  {
    title: 'Pro Audio',
    year: '2026',
    summary:
      'Landing page para uma empresa de som e iluminação de eventos, com portfólio e contato direto pelo WhatsApp.',
    detail: 'Construída mobile-first, com componentes separados para serviços e portfólio.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: proaudio,
    imageAlt: 'Tela da landing page da Pro Audio',
    github: 'https://github.com/danilovaz7/ProAudio',
  },
];

const experience = [
  {
    period: 'mar 2026 – hoje',
    role: 'Estagiário de Operações',
    place: 'DP World, Santos',
    text: 'Apps em Power Apps usados pelos operadores do terminal, automações com Power Automate ligadas aos horários de atracação dos navios e painéis em Power BI para acompanhar a operação.',
  },
  {
    period: 'jul 2025 – hoje',
    role: 'Desenvolvedor full stack (freelance)',
    place: 'Kolmeia Network',
    text: 'Desenvolvi quase toda a Forumpsico, plataforma de cursos de psicologia, junto com meu professor: cadastro, pagamentos, formulários, plugins e traduções em WordPress e PHP.',
  },
  {
    period: 'nov 2025 – mar 2026',
    role: 'Estagiário de despacho aduaneiro',
    place: 'Maersk, Santos',
    text: '',
  },
];

const education = [
  { period: '2024 – dez 2026', course: 'Análise e Desenvolvimento de Sistemas', place: 'Fatec Rubens Lara' },
  { period: '2023 – 2025', course: 'Técnico em Desenvolvimento de Sistemas', place: 'Liceu Santista' },
];

const skills = [
  {
    group: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Tailwind CSS', 'HTML e CSS'],
  },
  {
    group: 'Back-end e dados',
    items: ['Node.js', 'Express', 'APIs REST', 'Socket.IO', 'JWT', 'Java', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Sequelize'],
  },
  {
    group: 'Automação e ferramentas',
    items: ['Power Apps', 'Power Automate', 'Power BI', 'WordPress', 'Git e GitHub', 'Docker', 'Figma'],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <header className="border-b border-rule">
        <div className="page flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
          <a href="#topo" className="font-display text-lg font-semibold tracking-tight">
            Danilo Vaz
          </a>
          <nav aria-label="Seções" className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            <a className="nav-link" href="#projetos">Projetos</a>
            <a className="nav-link" href="#trajetoria">Trajetória</a>
            <a className="nav-link" href="#contato">Contato</a>
            <a className="nav-link" href={cvPdf} download="Curriculo_Danilo_Vaz.pdf">
              Currículo (PDF)
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        {/* Abertura */}
        <section id="topo" className="page grid gap-12 pb-20 pt-14 md:grid-cols-12 md:items-end md:pb-28 md:pt-20">
          <div className="md:col-span-7 lg:col-span-8">
            <h1 className="hero-name font-display">Danilo Vaz</h1>
            <p className="hero-in mt-8 max-w-[34rem] text-xl leading-relaxed md:text-[1.35rem]">
              Sou desenvolvedor full stack em Santos. Durante o dia, faço apps e painéis para a
              operação do porto na DP World. No resto do tempo, construo projetos como os que estão
              logo abaixo.
            </p>
            <p className="hero-in hero-in-late mt-8 inline-block bg-signal px-3 py-1.5 font-display text-[1.05rem] font-medium">
              Procurando vaga de dev júnior em São Paulo e região, híbrido ou remoto.
            </p>
            <div className="hero-in hero-in-late mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
              <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a className="text-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-link" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <figure className="hero-photo md:col-span-5 lg:col-span-4">
            <div className="relative ml-4 mt-4 md:ml-0">
              <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full bg-signal" />
              <img
                src={fotoPerfil}
                alt="Foto de Danilo Vaz"
                className="relative aspect-[4/5] w-full object-cover"
                width={1066}
                height={1600}
              />
            </div>
          </figure>
        </section>

        {/* Projetos */}
        <section id="projetos" aria-labelledby="projetos-titulo" className="border-t border-ink">
          <div className="page py-20 md:py-28">
            <div className="max-w-[40rem]">
              <h2 id="projetos-titulo" className="section-title font-display">Projetos</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Coisas que fiz para resolver problemas de verdade, minhas ou de quem me pediu.
              </p>
            </div>

            <ul className="mt-16 space-y-24 md:space-y-32">
              {projects.map((project) => (
                <li key={project.title} className="grid gap-8 md:grid-cols-12 md:gap-10">
                  <a
                    href={project.link ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-shot md:col-span-7"
                    aria-label={`Abrir ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  </a>

                  <div className="md:col-span-5 md:pt-2">
                    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                      <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        {project.title}
                      </h3>
                      <span className="shrink-0 text-ink-soft">{project.year}</span>
                    </div>
                    <p className="mt-5 text-lg leading-relaxed">{project.summary}</p>
                    {project.detail && <p className="mt-4 leading-relaxed text-ink-soft">{project.detail}</p>}
                    <p className="mt-5 text-[0.95rem] leading-relaxed text-dock">
                      Feito com {project.tech.slice(0, -1).join(', ')} e {project.tech[project.tech.length - 1]}.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-display font-medium">
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
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trajetória */}
        <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="bg-ink text-paper">
          <div className="page grid gap-16 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-4">
              <h2 id="trajetoria-titulo" className="section-title font-display">Trajetória</h2>
              <p className="mt-4 max-w-[22rem] text-lg leading-relaxed text-paper/75">
                Trabalho e estudo ao mesmo tempo desde o técnico. Termino a Fatec em dezembro de 2026.
              </p>
            </div>

            <div className="md:col-span-8">
              <h3 className="font-display text-xl font-semibold">Trabalho</h3>
              <ol className="mt-6 border-t border-paper/25">
                {experience.map((item) => (
                  <li key={item.role} className="grid gap-2 border-b border-paper/25 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                    <span className="text-paper/70">{item.period}</span>
                    <div>
                      <p className="font-display text-xl font-semibold">{item.role}</p>
                      <p className="text-paper/80">{item.place}</p>
                      {item.text && <p className="mt-3 max-w-[36rem] leading-relaxed text-paper/80">{item.text}</p>}
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="mt-16 font-display text-xl font-semibold">Formação</h3>
              <ol className="mt-6 border-t border-paper/25">
                {education.map((item) => (
                  <li key={item.course} className="grid gap-2 border-b border-paper/25 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                    <span className="text-paper/70">{item.period}</span>
                    <div>
                      <p className="font-display text-xl font-semibold">{item.course}</p>
                      <p className="text-paper/80">{item.place}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section aria-labelledby="tecnologias-titulo" className="border-b border-rule">
          <div className="page py-20 md:py-28">
            <h2 id="tecnologias-titulo" className="section-title font-display">Com o que eu trabalho</h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {skills.map((block) => (
                <div key={block.group}>
                  <h3 className="border-b border-ink pb-3 font-display text-xl font-semibold">{block.group}</h3>
                  <ul className="mt-4 space-y-1.5 text-lg">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-[40rem] leading-relaxed text-ink-soft">
              Falo inglês em nível avançado e espanhol em nível intermediário.
            </p>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" aria-labelledby="contato-titulo">
          <div className="page py-24 md:py-32">
            <h2 id="contato-titulo" className="section-title font-display max-w-[44rem]">
              Tem uma vaga ou um projeto em mente? Me escreve.
            </h2>
            <a href={`mailto:${EMAIL}`} className="contact-mail font-display mt-10 inline-block">
              {EMAIL}
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
              <a className="text-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-link" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-link" href={cvPdf} download="Curriculo_Danilo_Vaz.pdf">Baixar currículo (PDF)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="page flex flex-wrap justify-between gap-4 py-8 text-ink-soft">
          <p>© {new Date().getFullYear()} Danilo Vaz</p>
          <p>Santos, SP</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
