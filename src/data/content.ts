import type { SkillGroup, Project } from '../types'

export const SKILL_GROUPS: SkillGroup[] = [
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
    key: 'frontend',
    skills: [
      { name: 'React', level: 99 },
      { name: 'Next.js', level: 95 },
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
    id: 'appgraph',
    title: 'AppGraph',
    descKey: 'work.projects.appgraph',
    tech: ['Next.js', 'TypeScript', 'ELK.js', 'D3', 'SVG'],
    url: 'https://sys.xodjayev.uz/',
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
    id: 'nova',
    title: 'NOVA Store',
    descKey: 'work.projects.nova',
    tech: ['Next.js', 'FSD', 'Zustand', 'Motion'],
    url: 'https://store.xodjayev.uz/',
  },
  {
    id: 'facescan',
    title: 'FACESCAN',
    descKey: 'work.projects.facescan',
    tech: ['React', 'TypeScript', 'FastAPI', 'DeepFace', 'OpenCV'],
    url: 'https://github.com/asadbekXodjayev',
  },
  {
    id: 'steel',
    title: 'Steel Therapy',
    descKey: 'work.projects.steel',
    tech: ['Next.js', 'TypeScript', 'State Management'],
    url: 'https://steel.xodjayev.uz/',
  },
  {
    id: 'chess',
    title: 'Chess AI',
    descKey: 'work.projects.chess',
    tech: ['React', 'FastAPI', 'PyTorch', 'Minimax', 'Alpha-Beta'],
    url: 'https://github.com/asadbekXodjayev',
  },
  {
    id: 'digit',
    title: 'Digit Predictor',
    descKey: 'work.projects.digit',
    tech: ['React', 'Vite', 'FastAPI', 'PyTorch', 'CNN'],
    url: 'https://github.com/asadbekXodjayev',
  },
  {
    id: 'realestate',
    title: 'Real Estate Predictor',
    descKey: 'work.projects.realestate',
    tech: ['React', 'FastAPI', 'scikit-learn', 'Gradient Boosting'],
    url: 'https://github.com/asadbekXodjayev',
  },
  {
    id: 'airecipe',
    title: 'AI Recipe',
    descKey: 'work.projects.airecipe',
    tech: ['React', 'OpenAI API', 'Next.js'],
    url: 'https://airecipe.xodjayev.uz/',
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
    id: 'devmood',
    title: 'Dev Mood Board',
    descKey: 'work.projects.devmood',
    tech: ['React', 'OpenAI API', 'Next.js', 'TypeScript'],
    url: 'https://aifront.sys.xodjayev.uz/',
  },
  {
    id: 'moglobetrucking',
    title: 'MoGlobe Trucking',
    descKey: 'work.projects.moglobetrucking',
    tech: ['Next.js', 'TypeScript', 'Business'],
    url: 'https://dev.moglobetrucking.com/',
  },
  {
    id: 'artcodex',
    title: 'Art Codex Gallery',
    descKey: 'work.projects.artcodex',
    tech: ['React', 'Framer Motion', 'Canvas'],
    url: 'https://art.xodjayev.uz/',
  },
  {
    id: 'davinci',
    title: 'DaVinci Codex',
    descKey: 'work.projects.davinci',
    tech: ['React', 'Next.js', 'Scroll Animation'],
    url: 'https://davinchi.xodjayev.uz/',
  },
  {
    id: 'space',
    title: 'Space Tourism',
    descKey: 'work.projects.space',
    tech: ['React', 'CSS Animation', 'Multi-page'],
    url: 'https://space.xodjayev.uz/',
  },
  {
    id: 'spotify',
    title: 'Spotify Stats',
    descKey: 'work.projects.spotify',
    tech: ['React', 'Spotify API', 'OAuth'],
    url: 'https://spotifystat.xodjayev.uz/',
  },
  {
    id: 'imposter',
    title: 'Imposter',
    descKey: 'work.projects.imposter',
    tech: ['React', 'TypeScript', 'Game Logic'],
    url: 'https://imposter.xodjayev.uz/',
  },
  {
    id: 'school',
    title: 'Online School',
    descKey: 'work.projects.school',
    tech: ['React', 'Next.js', 'Landing Page'],
    url: 'https://school.xodjayev.uz/',
  },
  {
    id: 'yun',
    title: 'Yun Tattoo Studio',
    descKey: 'work.projects.yun',
    tech: ['Next.js', 'i18n', 'Business'],
    url: 'https://yoon.xodjayev.uz/ru/',
  },
]

export const PROJECTS_PER_PAGE = 6

export const TIMELINE_COUNT = 4

export const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub', url: 'https://github.com/asadbekXodjayev' },
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/asadbek-xodjayev-1bb8a624a/' },
  { key: 'telegram', label: 'Telegram', url: 'https://t.me/m2dnight' },
]

export const EMAIL = 'asadbekxodjayev@webster.edu'
