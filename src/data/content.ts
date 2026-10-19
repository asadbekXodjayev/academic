import type { SkillGroup, Project } from '../types'

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: 'ai_ml',
    skills: [
      { name: 'OpenAI API', level: 85 },
      { name: 'scikit-learn', level: 72 },
      { name: 'PyTorch', level: 70 },
      { name: 'LangChain', level: 66 },
      { name: 'Hugging Face', level: 68 },
    ],
  },
  {
    key: 'languages',
    skills: [
      { name: 'JavaScript', level: 98 },
      { name: 'TypeScript', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'Dart', level: 68 },
      { name: 'Kotlin', level: 65 },
      { name: 'Swift', level: 62 },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Django', level: 60 },
      { name: 'FastAPI', level: 72 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 55 },
    ],
  },
  {
    key: 'frontend',
    skills: [
      { name: 'React', level: 99 },
      { name: 'Next.js', level: 95 },
      { name: 'Three.js', level: 84 },
      { name: 'Framer Motion', level: 90 },
      { name: 'styled-components', level: 100 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Zustand', level: 90 },
      { name: 'shadcn/ui', level: 85 },
      { name: 'FSD', level: 82 },
    ],
  },
  {
    key: 'mobile',
    skills: [
      { name: 'React Native', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'Kotlin', level: 65 },
      { name: 'Swift', level: 62 },
    ],
  },
  {
    key: 'tooling',
    skills: [
      { name: 'Vite / Webpack', level: 95 },
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 90 },
      { name: 'Docker', level: 60 },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'ctm',
    title: 'Central Trade Market (CTM)',
    descKey: 'work.projects.ctm',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'i18n'],
    url: 'https://centraltrademarket.com/',
  },
  {
    id: 'sarbon',
    title: 'Sarbon Logistics',
    descKey: 'work.projects.sarbon',
    tech: ['React', 'Vite', 'Zustand', 'i18n', 'FSD'],
    url: 'https://new.sarbon.me/',
  },
  {
    id: 'splay',
    title: 'Splay TV',
    descKey: 'work.projects.splay',
    tech: ['Next.js', 'Spatial Nav', 'Zustand', 'FSD'],
    url: 'https://tv2.splay.glob.uz/',
  },
  {
    id: 'moglobetrucking',
    title: 'MoGlobe Trucking',
    descKey: 'work.projects.moglobetrucking',
    tech: ['Next.js', 'TypeScript', 'Business'],
    url: 'https://dev.moglobetrucking.com/',
  },
  {
    id: 'metallinvest',
    title: 'Metallinvest',
    descKey: 'work.projects.metallinvest',
    tech: ['WordPress', 'PHP', 'Custom Theme', 'jQuery'],
    url: 'https://metallinvest.uz/',
  },
  {
    id: 'appgraph',
    title: 'AppGraph',
    descKey: 'work.projects.appgraph',
    tech: ['Next.js', 'TypeScript', 'ELK.js', 'D3', 'SVG'],
    url: 'https://sys.xodjayev.uz/',
  },
  {
    id: 'artcodex',
    title: 'Art Codex Gallery',
    descKey: 'work.projects.artcodex',
    tech: ['React', 'Framer Motion', 'Canvas'],
    url: 'https://art.xodjayev.uz/',
  },
  {
    id: 'type',
    title: 'Type Game',
    descKey: 'work.projects.type',
    tech: ['React', 'TypeScript', 'Animation'],
    url: 'https://type.xodjayev.uz/',
  },
  {
    id: 'data',
    title: 'Data Algorithms',
    descKey: 'work.projects.data',
    tech: ['React', 'Canvas API', 'Algorithms'],
    url: 'https://data.xodjayev.uz/',
  },
  {
    id: 'facescan',
    title: 'FACESCAN',
    descKey: 'work.projects.facescan',
    tech: ['React', 'TypeScript', 'FastAPI', 'DeepFace', 'OpenCV'],
    url: 'https://github.com/asadbekXodjayev/ai-face-recognition',
  },
  {
    id: 'chess',
    title: 'Chess Bot',
    descKey: 'work.projects.chess',
    tech: ['React', 'FastAPI', 'python-chess', 'Alpha-Beta', 'Search'],
    url: 'https://github.com/asadbekXodjayev/ai-chess-bot',
  },
  {
    id: 'digit',
    title: 'Digit Recognizer',
    descKey: 'work.projects.digit',
    tech: ['React', 'Vite', 'FastAPI', 'PyTorch', 'CNN'],
    url: 'https://github.com/asadbekXodjayev/digit-predicterAI',
  },
  {
    id: 'dijkstra',
    title: 'Dijkstra Visualizers — C++, C#, Python',
    descKey: 'work.projects.dijkstra',
    tech: ['C++/CLI', 'C# / .NET 8', 'Python', 'Tkinter', 'Algorithms'],
    url: 'https://github.com/asadbekXodjayev?tab=repositories&q=dijkstra',
  },
]

export const PROJECTS_PER_PAGE = 6

export const TIMELINE_COUNT = 5

export const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub', url: 'https://github.com/asadbekXodjayev' },
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/asadbek-xodjayev-1bb8a624a/' },
  { key: 'telegram', label: 'Telegram', url: 'https://t.me/m2dnight' },
]

export const EMAIL = 'asadbekxodjayev@webster.edu'

export const CV_PATH = '/docs/Asadbek_Xodjayev_CV.pdf'
