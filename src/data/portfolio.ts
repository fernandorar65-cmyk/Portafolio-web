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
    role: 'Full Stack Developer',
    company: 'Codeable Labs',
    type: 'Jornada completa',
    period: 'abr. 2026 – actualidad',
    duration: '7 meses',
    location: 'Lima, Perú',
    description:
      'Proyectos internos desde cero con .NET y Quarkus, arquitectura limpia y almacenamiento escalable en Azure y AWS.',
    overview:
      'Codeable Labs es una consultora de desarrollo de software. Aquí diseño e implemento proyectos internos desde cero y participo en el levantamiento de requisitos con clientes, traduciendo necesidades de negocio en soluciones backend mantenibles.',
    responsibilities: [
      'Diseñar e implementar proyectos internos desde cero con .NET y Quarkus, aplicando principios de arquitectura limpia.',
      'Implementar soluciones de almacenamiento de datos escalables con Azure Table Storage y servicios de AWS.',
      'Participar en reuniones con clientes para comprender requisitos comerciales, flujos de trabajo y reglas del dominio, y traducirlos en requisitos técnicos e historias de usuario.',
      'Contribuir al diseño de soluciones backend mantenibles y escalables, siguiendo buenas prácticas de ingeniería de software y código limpio.',
    ],
    highlights: [
      'Proyectos construidos desde cero con arquitectura limpia.',
      'Contacto directo con clientes para definir requisitos y reglas de negocio.',
    ],
    skills: ['.NET', 'Quarkus', 'Azure Table Storage', 'AWS', 'Clean Architecture'],
    current: true,
  },
  {
    slug: 'pecano-software',
    role: 'Full Stack Developer',
    company: 'Pecano SAC',
    type: 'Jornada completa',
    period: 'mar. 2024 – abr. 2026',
    duration: '2 años 2 meses',
    location: 'Lima, Perú',
    description:
      'Servicios en la nube con Azure Functions y Azure Storage, APIs en C# y Python, e interfaces en Angular y React.',
    overview:
      'Pecano es una empresa peruana de TI especializada en facturación electrónica y soluciones contables para pymes. Desarrollé APIs y servicios en la nube sobre Azure, interfaces de usuario y automatizaciones de procesos clave del negocio.',
    responsibilities: [
      'Implementar servicios en la nube de Azure, como Azure Functions y Azure Storage (Blob y Table), para construir soluciones escalables.',
      'Desarrollar y optimizar endpoints de APIs backend en C# y Python sobre Azure Functions, para productos nuevos y existentes.',
      'Implementar interfaces de usuario intuitivas con Angular y React.',
      'Automatizar flujos de trabajo como el alta de comercios para la integración de nuevos clientes al sistema de Pecano.',
    ],
    highlights: [
      'Arquitectura serverless sobre Azure Functions.',
      'Automatización del onboarding de nuevos clientes.',
    ],
    skills: ['Azure Functions', 'Azure Storage', 'C#', 'Python', 'Angular', 'React'],
  },
  {
    slug: 'global-go',
    role: 'Full Stack Developer',
    company: 'Global Go',
    type: 'Jornada completa',
    period: 'ene. 2023 – mar. 2024',
    duration: '1 año 3 meses',
    location: 'Lima, Perú',
    description:
      'Catálogo de motocicletas con Nest.js y Angular 18, soporte del ERP y optimización de la plataforma interna.',
    overview:
      'Global Go es una empresa peruana especializada en facturación electrónica y soluciones ERP para pymes. Desarrollé un catálogo de motocicletas desde cero, di soporte al ERP de la empresa y optimicé la plataforma interna de gestión.',
    responsibilities: [
      'Desarrollar un catálogo completo de motocicletas con Nest.js y Angular 18, mejorando la gestión de inventario, la consistencia de datos y la escalabilidad del sistema.',
      'Brindar soporte técnico al sistema ERP, identificando y resolviendo incidencias reportadas por los usuarios para garantizar la continuidad del negocio.',
      'Optimizar la plataforma interna de gestión mediante la refactorización de procesos backend y mejoras en la interfaz de usuario.',
      'Colaborar con equipos multidisciplinarios para integrar nuevas funcionalidades y optimizar flujos de trabajo.',
    ],
    highlights: [
      'Catálogo construido desde cero con impacto directo en inventario.',
      'Mejoras de rendimiento y experiencia de usuario en la plataforma interna.',
    ],
    skills: ['Nest.js', 'Angular', 'TypeScript', 'ERP'],
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
