export type CourseRecord = {
  name: string
  grade: string
  pending?: boolean
}

export type CourseCategory = {
  key: string
  courses: CourseRecord[]
}

export type Education = {
  institution: string
  degree: string
  field: string
  period: string
  expectedGrad: string
  location: string
  gpa: string
  credits: string
  courseCategories: CourseCategory[]
}

export const RESEARCH_INTEREST_KEYS = ['ml_dl', 'vision', 'nlp', 'hci', 'rl', 'ai_eng'] as const

export const EDUCATION: Education = {
  institution: 'Webster University',
  degree: 'Bachelor of Science',
  field: 'Computer Science & Economics',
  period: '2022 – Present',
  expectedGrad: 'May 2027',
  location: 'Tashkent, Uzbekistan',
  gpa: '3.52 / 4.0',
  credits: '67 / 120',
  courseCategories: [
    {
      key: 'cs',
      courses: [
        { name: 'Computer Programming I', grade: 'A' },
        { name: 'Computer Programming II', grade: 'A' },
        { name: 'Principles of Programming Languages', grade: 'A' },
        { name: 'Computer Languages', grade: 'A' },
        { name: 'Systems Analysis and Design', grade: 'A' },
        { name: 'IT Project Management', grade: 'A-' },
        { name: 'Network Principles', grade: 'A-' },
        { name: 'Social Engineering & Cybersecurity', grade: 'A' },
        { name: 'Operating Systems', grade: 'B-' },
        { name: 'Computer Architecture', grade: 'C+' },
        { name: 'Data Structures I', grade: 'In Progress', pending: true },
        { name: 'Computer and Information Security', grade: 'In Progress', pending: true },
      ],
    },
    {
      key: 'math',
      courses: [
        { name: 'Mathematics for Computer Science', grade: 'B' },
        { name: 'College Algebra', grade: 'B' },
        { name: 'Descriptive Statistics', grade: 'A-' },
      ],
    },
    {
      key: 'econ',
      courses: [
        { name: 'Survey of Economics', grade: 'A' },
        { name: 'Financial Accounting I', grade: 'B' },
        { name: 'Marketing', grade: 'A-' },
      ],
    },
  ],
}

