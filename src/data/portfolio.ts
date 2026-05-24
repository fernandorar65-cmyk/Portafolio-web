export const profile = {
  name: 'Alpakino',
  role: 'Ingeniero de Software con experiencia en desarrollo web y mobile',
  tagline:
    'Construyo experiencias web rápidas, accesibles y con atención al detalle.',
  email: 'hola@alpakino.dev',
  location: 'Perú',
  stats: [
    { value: '3+', label: 'Años de experiencia' },
    { value: '15+', label: 'Proyectos' },
    { value: 'Full', label: 'Stack dev' },
  ],
  about: [
    'Soy desarrollador apasionado por crear productos digitales que resuelvan problemas reales. Me enfoco en código limpio, buenas prácticas y interfaces que se sientan naturales.',
    'Trabajo con el ecosistema JavaScript y .NET, desde APIs hasta interfaces en React. Siempre busco aprender y mejorar cada proyecto.',
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Correo', href: 'mailto:hola@alpakino.dev', icon: 'mail' },
  ],
}

export type Experience = {
  slug: string
  role: string
  company: string
  type: string
  period: string
  duration?: string
  location: string
  description?: string
  overview: string
  responsibilities: string[]
  highlights: string[]
  skills: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    slug: 'codeable-labs',
    role: 'Software Engineer I',
    company: 'Codeable Labs',
    type: 'Jornada completa',
    period: 'abr. 2026 – actualidad',
    duration: '2 meses',
    location: 'En remoto',
    description:
      'Desarrollo de productos web y mobile con React y Flutter en un entorno ágil y remoto.',
    overview:
      'En Codeable Labs participo en el desarrollo de soluciones digitales combinando frontend web con React y aplicaciones mobile con Flutter, trabajando en equipo de forma remota.',
    responsibilities: [
      'Implementar interfaces y flujos en React con TypeScript.',
      'Desarrollar funcionalidades en Flutter para productos mobile.',
      'Colaborar en revisiones de código y mejoras de arquitectura frontend.',
      'Integrar APIs REST y mantener buenas prácticas de calidad.',
    ],
    highlights: [
      'Stack híbrido web + mobile en un mismo rol.',
      'Trabajo 100 % remoto con enfoque en entregables iterativos.',
    ],
    skills: ['Flutter', 'React.js', 'TypeScript', 'Node.js'],
    current: true,
  },
  {
    slug: 'freelance',
    role: 'Desarrollador Full Stack',
    company: 'Independiente / Freelance',
    type: 'Profesional independiente',
    period: 'dic. 2025 – actualidad',
    duration: '6 meses',
    location: 'En remoto',
    description:
      'Proyectos a medida para clientes: desde landing pages hasta APIs y paneles administrativos.',
    overview:
      'Como freelance diseño y desarrollo soluciones completas para distintos clientes, abarcando frontend, backend y despliegue según las necesidades de cada proyecto.',
    responsibilities: [
      'Analizar requerimientos y proponer arquitectura técnica.',
      'Desarrollar frontends en React y backends en .NET cuando aplica.',
      'Gestionar entregas por sprints y comunicación directa con el cliente.',
      'Documentar APIs y facilitar el mantenimiento post-entrega.',
    ],
    highlights: [
      'Autonomía total en stack y tiempos de entrega.',
      'Experiencia variada en distintos dominios de negocio.',
    ],
    skills: ['React', 'TypeScript', 'C#', 'ASP.NET Core'],
    current: true,
  },
  {
    slug: 'pecano-software',
    role: 'Web Developer Full Stack',
    company: 'Pecano Software SAC',
    type: 'Jornada completa',
    period: 'mar. 2024 – dic. 2025',
    duration: '1 año 10 meses',
    location: 'En remoto',
    description:
      'Diseñé y desarrollé proyectos desde cero con Azure Table Storage y pipelines en Azure DevOps.',
    overview:
      'En Pecano Software construí aplicaciones full stack desde la etapa de diseño hasta producción, usando servicios de Microsoft Azure para almacenamiento y despliegue continuo.',
    responsibilities: [
      'Diseñar y desarrollar proyectos web desde cero.',
      'Implementar almacenamiento con Azure Table Storage.',
      'Configurar pipelines y flujos en Azure DevOps.',
      'Mantener código en C#, React y bases SQL.',
    ],
    highlights: [
      'Más de 1 año liderando features de punta a punta.',
      'Experiencia sólida en el ecosistema Microsoft Azure.',
    ],
    skills: ['Microsoft Azure', 'Azure DevOps', 'C#', 'React', 'SQL'],
  },
  {
    slug: 'global-go',
    role: 'Programador web',
    company: 'Global Go',
    type: 'Jornada completa',
    period: 'jun. 2023 – mar. 2024',
    duration: '10 meses',
    location: 'Lima, Perú · Presencial',
    description:
      'Catálogo de motocicletas con .NET y Angular 18 para gestión de inventario y consulta de clientes.',
    overview:
      'En Global Go desarrollé un catálogo integral de motocicletas desde cero, utilizando .NET en backend y Angular 18 en frontend para optimizar inventario y accesibilidad.',
    responsibilities: [
      'Modelar y exponer APIs con .NET Framework.',
      'Construir el frontend del catálogo en Angular 18.',
      'Optimizar consultas y flujos de inventario.',
      'Trabajar de forma presencial con el equipo en Lima.',
    ],
    highlights: [
      'Proyecto greenfield con impacto directo en operaciones comerciales.',
      'Primera experiencia formal full stack en entorno presencial.',
    ],
    skills: ['Angular', '.NET Framework', 'SQL', 'REST APIs'],
  },
]

export const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'C#',
  'ASP.NET Core',
  'SQL',
  'Git',
  'REST APIs',
  'Vite',
  'CSS',
]

export const projects = [
  {
    title: 'E-commerce Dashboard',
    description:
      'Panel administrativo con métricas en tiempo real, gestión de inventario y reportes exportables.',
    tags: ['React', 'TypeScript', 'Node.js'],
    href: '#',
    repo: 'https://github.com',
  },
  {
    title: 'API de reservaciones',
    description:
      'Backend REST con autenticación JWT, validaciones y documentación OpenAPI para un sistema de citas.',
    tags: ['C#', 'ASP.NET Core', 'EF Core'],
    href: '#',
    repo: 'https://github.com',
  },
  {
    title: 'Landing interactiva',
    description:
      'Sitio de presentación con animaciones suaves, modo oscuro y optimización para Core Web Vitals.',
    tags: ['React', 'Vite', 'CSS'],
    href: '#',
    repo: 'https://github.com',
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]
